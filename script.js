function startAssessment() {
    document.getElementById("assessment").scrollIntoView({
        behavior: "smooth"
    });
}


function calculateCareer() {

    const answers = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    if (answers.length < 3) {

        alert("Please answer all 3 questions.");

        return;
    }


    let scores = {
        technology: 0,
        analysis: 0,
        business: 0,
        creative: 0
    };


    answers.forEach(answer => {
        scores[answer.value]++;
    });


    let career =
        Object.keys(scores).reduce((a, b) =>
            scores[a] > scores[b] ? a : b
        );


    const careerData = {

        technology: {
            name: "AI & Technology",
            description:
                "You show strong logical thinking and interest in technology. Careers in AI, software, cloud and emerging technologies may suit you."
        },

        analysis: {
            name: "Data Analyst",
            description:
                "Your analytical mindset makes you suitable for careers involving data, insights, research and decision-making."
        },

        business: {
            name: "Business Analyst",
            description:
                "Your communication and decision-making strengths can be valuable in business analysis, consulting and product roles."
        },

        creative: {
            name: "UI/UX & Product Design",
            description:
                "Your creativity and interest in ideas may make design, product and user-experience careers a good direction."
        }

    };


    document.getElementById("quiz").classList.add("hidden");

    document.getElementById("result").classList.remove("hidden");

    document.getElementById("careerName").textContent =
        careerData[career].name;

    document.getElementById("careerDescription").textContent =
        careerData[career].description;
}


function resetQuiz() {

    document.getElementById("quiz").classList.remove("hidden");

    document.getElementById("result").classList.add("hidden");

    document.querySelectorAll(
        'input[type="radio"]'
    ).forEach(input => {
        input.checked = false;
    });
}


