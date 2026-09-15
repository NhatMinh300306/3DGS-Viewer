import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import './style.css';


/* ======================================================
   1. Scene files
====================================================== */

const scenes = [
    {
        name: 'Scene 1',
        file: 'scene1.ksplat'
    },
    {
        name: 'Scene 2',
        file: 'scene2.ksplat'
    },
    {
        name: 'Scene 3',
        file: 'scene3.ksplat'
    },
    {
        name: 'Scene 4',
        file: 'scene4.ksplat'
    }
];


/* ======================================================
   2. GitHub Pages-safe base path
====================================================== */

const base = import.meta.env.BASE_URL;

scenes.forEach(scene => {
    scene.path = `${base}scenes/${scene.file}`;
});


/* ======================================================
   3. HTML elements
====================================================== */

const viewerContainer =
    document.getElementById('viewer-container');

const loadingElement =
    document.getElementById('loading');

const statusElement =
    document.getElementById('status');

const buttons =
    document.querySelectorAll('.scene-button');


/* ======================================================
   4. Viewer
====================================================== */

const viewer =
    new GaussianSplats3D.Viewer({

        cameraUp: [0, 1, 0],

        initialCameraPosition: [0, 0, 5],

        initialCameraLookAt: [0, 0, 0],

        selfDrivenMode: true,

        // IMPORTANT:
        // SharedArrayBuffer is disabled.
        sharedMemoryForWorkers: false,

        // Therefore GPU accelerated sorting is disabled too.
        gpuAcceleratedSort: false,

        halfPrecisionCovariancesOnGPU: true,

        // Render normally.
        renderMode:
            GaussianSplats3D.RenderMode.Always,

        // Don't wait for a gradual fade-in.
        sceneRevealMode:
            GaussianSplats3D.SceneRevealMode.Instant
    });


/* ======================================================
   5. Add canvas
====================================================== */

viewerContainer.appendChild(
    viewer.renderer.domElement
);


/* ======================================================
   6. State
====================================================== */

let currentScene = 0;

let isLoading = false;


/* ======================================================
   7. Browser cache preload
======================================================

   This DOES NOT load the scene into the 3D renderer.

   It simply asks the browser to download the file.
   Later GaussianSplats3D can get the file from cache.
====================================================== */

async function preloadFile(index) {

    const scene = scenes[index];

    try {

        console.log(
            `Preloading ${scene.name}: ${scene.path}`
        );

        await fetch(scene.path, {
            cache: 'force-cache'
        });

        console.log(
            `${scene.name} file is cached.`
        );

    } catch (error) {

        console.warn(
            `Could not preload ${scene.name}:`,
            error
        );
    }
}


/* ======================================================
   8. Load selected scene
====================================================== */

async function loadScene(index) {

    if (isLoading) {
        return;
    }

    isLoading = true;

    const scene = scenes[index];

    console.log(
        `Loading ${scene.name}`
    );

    console.log(
        `File: ${scene.path}`
    );


    loadingElement.style.display = 'flex';

    loadingElement.textContent =
        `Loading ${scene.name}...`;

    statusElement.textContent =
        `Loading ${scene.name}...`;


    try {

        /* ------------------------------------------------
           Remove currently loaded scene
        ------------------------------------------------ */

        const sceneCount =
            viewer.getSceneCount();

        if (sceneCount > 0) {

            await viewer.removeSplatScenes([0]);
        }


        /* ------------------------------------------------
           Load selected KSPLAT
        ------------------------------------------------ */

        await viewer.addSplatScene(
            scene.path,
            {
                format:
                    GaussianSplats3D.SceneFormat.KSplat,

                showLoadingUI: false,

                splatAlphaRemovalThreshold: 1,

                position: [0, 0, 0],

                rotation: [0, 0, 1, 0],

                scale: [1, 1, 1],

                progressiveLoad: false
            }
        );


        currentScene = index;


        console.log(
            `${scene.name} loaded successfully.`
        );


        loadingElement.style.display = 'none';

        statusElement.textContent =
            `${scene.name} ready`;


    } catch (error) {

        console.error(
            `Failed to load ${scene.name}:`,
            error
        );


        loadingElement.style.display = 'flex';

        loadingElement.textContent =
            `Failed to load ${scene.name}`;

        statusElement.textContent =
            'Load failed. Check Console.';


    } finally {

        isLoading = false;
    }
}


/* ======================================================
   9. Scene buttons
====================================================== */

buttons.forEach((button) => {

    button.addEventListener(
        'click',
        async () => {

            const index =
                Number(button.dataset.scene);


            if (index === currentScene) {
                return;
            }


            if (isLoading) {
                return;
            }


            buttons.forEach((b) => {
                b.classList.remove('active');
            });


            button.classList.add('active');


            await loadScene(index);

        }
    );

});


/* ======================================================
   10. Start viewer
====================================================== */

viewer.start();


/* ======================================================
   11. Initial load
====================================================== */

(async () => {

    try {

        // First priority:
        // show Scene 1.
        await loadScene(0);


        /*
         * Once Scene 1 is visible,
         * quietly download Scene 2/3/4.
         *
         * We do this one-by-one to avoid creating
         * four simultaneous large downloads.
         */

        for (let i = 1; i < scenes.length; i++) {

            await preloadFile(i);

        }


        statusElement.textContent =
            'All scene files cached';


    } catch (error) {

        console.error(
            'Initial loading failed:',
            error
        );

    }

})();