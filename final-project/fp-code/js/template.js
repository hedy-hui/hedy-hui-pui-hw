document.addEventListener("DOMContentLoaded", async () => {
  let projectFile;

  // Identify which project file to load based on the current page
  const currentPath = window.location.pathname;
  if (currentPath.includes("project1")) {
    projectFile = "../data/project1.js"; 
  }

  if (projectFile) {
    try {
      const { default: projectData } = await import(projectFile);
      renderPage(projectData);
    } catch (error) {
      console.error("Error loading project file:", error);
    }
  } else {
    console.error("Project data file not found for this page.");
  }

  function renderPage(data) {
    document.getElementById("project-title").innerText = data.title;

    // Update hero details
    document.getElementById("project-role").innerText = data.heroDetails.role;
    document.getElementById("project-timeline").innerText = data.heroDetails.timeline;
    document.getElementById("project-tools").innerText = data.heroDetails.tools;
    document.getElementById("project-platform").innerText = data.heroDetails.platform;
    document.getElementById("project-team").innerText = data.heroDetails.team.join(", ");
    document.getElementById("project-skills").innerText = data.heroDetails.skills.join(", ");

    // Update hero image
    const heroImage = document.getElementById("project-image");
    heroImage.src = data.heroDetails.image;
    heroImage.alt = `Thumbnail image for ${data.title}`;

    // Update other sections
    document.getElementById("overview-content").innerText = data.sections.overview;
    document.getElementById("problems-content").innerText = data.sections.problems;

    // Set up the research section with 3 containers
    const researchSection = document.getElementById("research");

    // Container 1: User Interviews
    const container1 = document.createElement("div");
    container1.classList.add("container-style", "mb-4");  

    const userInterviewsHeader = document.createElement("p");
    userInterviewsHeader.classList.add("fw-bold", "fs-5");  
    userInterviewsHeader.innerText = "User Interviews";

    const userInterviewsContent = document.createElement("p");
    userInterviewsContent.innerText = "I interviewed 7 users to identify pain points in CPII ChatDoc Master’s early design.";

    const feedbackLabel = document.createElement("p"); 
    feedbackLabel.classList.add("fs-6");
    feedbackLabel.innerText = "User feedback:";

    const quotesContainer = document.createElement("div");

    const quotes = [
      { text: "The best way to predict the future is to invent it.", color: "#80BBFF" }, 
      { text: "Design is not just what it looks like, but how it works.", color: "#BB9BFF" }, 
      { text: "Simplicity is the ultimate sophistication.", color: "#5A82C6" } 
    ];

    let currentIndex = 0;
    const quoteText = document.createElement("div");
    quoteText.id = "quote-text";
    quoteText.classList.add("text-center", "fw-bold", "fs-4");
    quotesContainer.appendChild(quoteText);

    function switchQuote() {
      // Fade out the current quote
      quoteText.classList.add("fade-out");

      // After the fade-out completes (500ms), change the quote
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % quotes.length; // Update the index
        quoteText.textContent = quotes[currentIndex].text;

        // Change the color based on the current quote
        quoteText.style.color = quotes[currentIndex].color;

        quoteText.style.fontStyle = "italic";

        // Fade in the new quote
        quoteText.classList.remove("fade-out");
        quoteText.classList.add("fade-in");
      }, 500); 
    }

    // Initialize the first quote with fade-in
    quoteText.textContent = quotes[currentIndex].text;
    quoteText.style.color = quotes[currentIndex].color; 
    quoteText.classList.add("fade-in");

    // Switch quotes every 3 seconds
    setInterval(switchQuote, 3000); 

    // Append all content to container1
    container1.appendChild(userInterviewsHeader);
    container1.appendChild(userInterviewsContent);
    container1.appendChild(feedbackLabel); 
    container1.appendChild(quotesContainer);

    // Container 2: Usability Testing
    const container2 = document.createElement("div");
    container2.classList.add("container-style", "mb-4");  

    const usabilityTestingHeader = document.createElement("p");
    usabilityTestingHeader.classList.add("fw-bold", "fs-5");
    usabilityTestingHeader.innerText = "Usability Testing";

    const usabilityTestingContent = document.createElement("p");
    usabilityTestingContent.innerHTML = `Usability tests with the same 7 users confirmed key issues:<br>
                                        • 71% of users couldn’t generate a new chatbot while another was in progress.<br>
                                        • It took users 20 seconds on average to locate previously created chatbots.<br><br>
                                        This drove the need for better workflow management and improved navigation.`;

    container2.appendChild(usabilityTestingHeader);
    container2.appendChild(usabilityTestingContent);

    // Container 3: Competitive Analysis
    const container3 = document.createElement("div");
    container3.classList.add("container-style", "mb-4");  

    const competitiveAnalysisHeader = document.createElement("p");
    competitiveAnalysisHeader.classList.add("fw-bold", "fs-5");
    competitiveAnalysisHeader.innerText = "Competitive Analysis";

    const competitiveAnalysisContent = document.createElement("p");
    competitiveAnalysisContent.innerHTML = `I analyzed 5 competitor products to identify missing features and opportunities for differentiation.<br><br>
                                           Key insight: Only one product supports chatbot customization, presenting an opportunity for CPII ChatDoc Master to innovate.`;

    container3.appendChild(competitiveAnalysisHeader);
    container3.appendChild(competitiveAnalysisContent);

    // Append the containers to the research section
    researchSection.appendChild(container1);
    researchSection.appendChild(container2);
    researchSection.appendChild(container3);

    // Add the text directly below the 3 containers
    const researchText = document.createElement("p");  
    researchText.innerText = data.sections.research;  

    // Append the <p> directly to the research section
    researchSection.appendChild(researchText);

    // Update other sections
    document.getElementById("opportunity-content").innerText = data.sections.opportunity;
    document.getElementById("takeaways-content").innerText = data.sections.takeaways;
  }
});

// Set up Intersection Observer to detect when elements come into view
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.fade-in'); 

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.3
  });

  // Start observing each section
  sections.forEach(section => {
    observer.observe(section);
  });
});