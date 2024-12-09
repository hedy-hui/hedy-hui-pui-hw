document.addEventListener("DOMContentLoaded", async () => {
  let projectFile;

  // Identify which project file to load based on the current page
  const currentPath = window.location.pathname;
  console.log("Current Path:", currentPath); // Debugging
  if (currentPath.includes("project1")) {
    projectFile = "../data/project1.js"; // Adjusted path
  }

  if (projectFile) {
    try {
      console.log("Attempting to load:", projectFile); // Debugging
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

    // Update sections
    document.getElementById("overview-content").innerText = data.sections.overview;
    document.getElementById("problems-content").innerText = data.sections.problems;
    document.getElementById("research-content").innerText = data.sections.research;
    document.getElementById("solutions-content").innerText = data.sections.solutions;
    document.getElementById("takeaways-content").innerText = data.sections.takeaways;

    // Adding quotes carousel to the research section
    const quotesContainer = document.createElement("div");
    quotesContainer.classList.add("quotes-carousel");

    const quotes = [
      "“The interface is cluttered; it’s hard to know where to focus.”",
      "“There’s no visual hierarchy, making it confusing to navigate.”",
      "“I’d like more customization options for the chatbot.”"
    ];

    quotes.forEach((quote, index) => {
      const quoteDiv = document.createElement("div");
      quoteDiv.classList.add("quote");
      quoteDiv.innerText = quote;
      quotesContainer.appendChild(quoteDiv);
    });

    // Insert the quotes container into the page
    document.getElementById("research-content").appendChild(quotesContainer);

    // Create dots for quote navigation
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots-container");

    quotes.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    quotesContainer.appendChild(dotsContainer);

    let currentIndex = 0;
    const quoteElements = document.querySelectorAll(".quotes-carousel .quote");
    const dotElements = document.querySelectorAll(".dots-container .dot");

    // Function to change the visible quote with fade-in and fade-out animation
    function showQuote(index) {
      quoteElements.forEach((quote, i) => {
        if (i === index) {
          quote.classList.add("fade-in");
          quote.classList.remove("fade-out");
          quote.style.display = "block";
        } else {
          quote.classList.add("fade-out");
          quote.classList.remove("fade-in");
          setTimeout(() => {
            quote.style.display = "none";
          }, 1000); // Delay hiding for smoother fade-out
        }
      });

      dotElements.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    // Automatically switch quotes every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % quotes.length;
      showQuote(currentIndex);
    }, 5000);

    // Manual quote switch by clicking on dots
    dotElements.forEach(dot => {
      dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.dataset.index);
        showQuote(currentIndex);
      });
    });

    // Initially show the first quote
    showQuote(currentIndex);
  }
});