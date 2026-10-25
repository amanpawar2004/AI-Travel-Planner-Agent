/* =========================================
   AI TRAVEL PLANNER
========================================= */


/* -----------------------------------------
   DOM ELEMENTS
----------------------------------------- */

const travelForm =
    document.getElementById("travelForm");

const generateBtn =
    document.getElementById("generateBtn");

const buttonText =
    document.getElementById("buttonText");

const buttonIcon =
    document.getElementById("buttonIcon");

const loadingSection =
    document.getElementById("loadingSection");

const resultSection =
    document.getElementById("resultSection");

const resultContent =
    document.getElementById("resultContent");

const errorSection =
    document.getElementById("errorSection");

const errorMessage =
    document.getElementById("errorMessage");

const regenerateBtn =
    document.getElementById("regenerateBtn");


/* -----------------------------------------
   STORE LAST REQUEST
----------------------------------------- */

let lastRequest = null;


/* -----------------------------------------
   GENERATE ITINERARY
----------------------------------------- */

async function generateItinerary() {

    const city =
        document
            .getElementById("city")
            .value
            .trim();

    const days =
        document
            .getElementById("days")
            .value;

    const budget =
        document
            .getElementById("budget")
            .value;


    /* Validate */

    if (!city) {

        showError(
            "Please enter a destination."
        );

        return;

    }


    if (!days || days < 1) {

        showError(
            "Please enter a valid number of days."
        );

        return;

    }


    if (!budget || budget < 500) {

        showError(
            "Please enter a valid budget."
        );

        return;

    }


    /* Save request */

    lastRequest = {

        city: city,

        days: Number(days),

        budget: Number(budget)

    };


    /* UI state */

    setLoading(true);

    hideError();

    hideResult();


    try {

        const response =
            await fetch("/plan", {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(
                        lastRequest
                    )

            });


        const data =
            await response.json();


        /* HTTP error */

        if (!response.ok) {

            throw new Error(
                data.error ||
                "Unable to generate itinerary."
            );

        }


        /* Backend error */

        if (!data.success) {

            throw new Error(
                data.error ||
                "Unable to generate itinerary."
            );

        }


        /* Check itinerary */

        if (!data.itinerary) {

            throw new Error(
                "The AI returned an empty itinerary."
            );

        }


        /* Render Markdown */

        displayItinerary(
            data.itinerary
        );


    } catch (error) {

        console.error(
            "Travel planner error:",
            error
        );


        showError(
            error.message
        );


    } finally {

        setLoading(false);

    }

}


/* -----------------------------------------
   DISPLAY ITINERARY
----------------------------------------- */

function displayItinerary(
    itinerary
) {

    /*
        Convert AI Markdown
        into beautiful HTML.
    */

    if (
        typeof marked !== "undefined"
    ) {

        resultContent.innerHTML =
            marked.parse(
                itinerary
            );

    } else {

        /*
            Fallback if Markdown
            library doesn't load.
        */

        resultContent.textContent =
            itinerary;

    }


    showResult();


    /*
        Smoothly scroll to
        itinerary.
    */

    setTimeout(() => {

        resultSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 150);

}


/* -----------------------------------------
   LOADING STATE
----------------------------------------- */

function setLoading(
    loading
) {

    if (loading) {

        generateBtn.disabled = true;

        buttonIcon.textContent =
            "⏳";

        buttonText.textContent =
            "Creating Your Itinerary...";

        loadingSection
            .classList
            .remove("hidden");

    } else {

        generateBtn.disabled = false;

        buttonIcon.textContent =
            "✨";

        buttonText.textContent =
            "Generate My Travel Plan";

        loadingSection
            .classList
            .add("hidden");

    }

}


/* -----------------------------------------
   SHOW RESULT
----------------------------------------- */

function showResult() {

    resultSection
        .classList
        .remove("hidden");

}


/* -----------------------------------------
   HIDE RESULT
----------------------------------------- */

function hideResult() {

    resultSection
        .classList
        .add("hidden");

}


/* -----------------------------------------
   SHOW ERROR
----------------------------------------- */

function showError(
    message
) {

    errorMessage.textContent =
        message;

    errorSection
        .classList
        .remove("hidden");


    errorSection.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* -----------------------------------------
   HIDE ERROR
----------------------------------------- */

function hideError() {

    errorSection
        .classList
        .add("hidden");

}


/* -----------------------------------------
   FORM SUBMIT
----------------------------------------- */

travelForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        generateItinerary();

    }
);


/* -----------------------------------------
   REGENERATE
----------------------------------------- */

regenerateBtn.addEventListener(
    "click",
    function () {

        if (!lastRequest) {

            generateItinerary();

            return;

        }


        generateItinerary();

    }
);


/* -----------------------------------------
   ENTER KEY SUPPORT
----------------------------------------- */

document
    .getElementById("city")
    .addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                generateItinerary();

            }

        }
    );