<mark>**Note that this document order from FP4 -> FP1**</mark>

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 

## Link to PDF:
https://drive.google.com/file/d/1BCrvrAFmVCUzUvcZNDzNZrrKuqnyX72P/view?usp=share_link

## Part 1: Website Description

My personal portfolio website is designed to showcase my work as a UX designer and demonstrate my coding skills. The purpose of this website is twofold: to highlight my design projects and to provide a platform where I can present my technical abilities, giving me a competitive edge in the job market. Coding the website myself also reflects my passion for both design and development, showing recruiters that I have the skills to build functional, engaging digital experiences.

The primary target audience for my website includes recruiters and potential employers, as I plan to upload my portfolio when applying for jobs. Additionally, fellow UX designers who visit my LinkedIn profile may also view my portfolio to gain insight into my design process and skills.

In terms of information, the website is divided into three main sections: the home page, a project page, and an about page. The home page features a brief self-introduction and three project cards that lead to more detailed project pages. One of the project pages showcases the entire project process, including Overview, Problems, Research, Opportunity, Solutions, and Takeaways. The about page includes a self-introduction along with photos that show different aspects of my personality.

What makes the website interesting and engaging are the interactive elements and animations I’ve incorporated. Firstly, on the home page, a text change effect in the hero section creates a dynamic introduction. Secondly, hover effects on project cards and images make the website more visually appealing. Thirdly, on the project page, a sticky navigation menu allows users to quickly jump to different sections. Lastly, interactive video and image carousels on both the project and about pages keep the experience engaging and immersive.

## Part 2: User Interaction

> Home Page
1. Hero section title text change effect
- Interaction type: None required. The text changes automatically.
- How to reproduce: Upon loading the page, the text in the hero section "Hello, I'm Hedy." is followed by the appearance of the second sentence, "I'm a product designer," after a few seconds with an automatic animated transition.

2. Image and Project card hover effect
- Interaction type: Hover
- How to reproduce: When users hover their mouse over the images or project cards, the images or cards will enlarge slightly.

3. Label tag hover effect
- Interaction type: Hover
- How to reproduce: When users hover over the tags (e.g., "WEB DESIGN") on each project card, the background color will change to a darker shade.

> Project Page
1. Navigation
- Interaction type: Click
- How to reproduce: Click on the navigation links in the sticky menu on the left to navigtate to the respective section on the right side of the page.

2. Switching quotes effect
- Interaction type: None required. The effect occurs automatically.
- How to reproduce: In the "User Interviews" subsection under the "Research" section, three quotes will automatically switch every few seconds, with colors changing as the quotes switch. 

3. Video carousel
- Interaction type: Wait or click
- How to reproduce: Either wait for the videos to switch automatically, or click on the left or right arrows to view the previous or next video in the carousel.

4. Scrolling effect for text sections
- Interaction type: Open project page
- How to reproduce: When project page is loaded, each section of text will fade in and slide up.

> About Page
1. Image carousel
- Interaction type: Wait or click
- How to reproduce: Either wait for the images to switch automatically, or click on the carousel indicators (gray lines) to manually switch to another image in the carousel.

> Top Navigation Bar (for all pages)
1. Navigation
- Interaction type: Click
- How to reproduce: Click on the "H" logo or the "Home" link to navigate to the home page, and clicking on the "About" link to navigate to the about page.

2. Navigation link hover effect
- Interaction type: Hover
- How to reproduce: When users hover over the "Home" or "About" links, the text color will change to a darker gray.

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Bootstrap
   * Why did you choose to use it over other alternatives? 
   Bootstrap offers a wide range of pre-built components, such as navigation bars and buttons. I chose it over alternatives like Foundation or Bulma because it is very easy to learn and implement and helps me simplify responsive design.
   * How you used it? 
   Bootstrap classes were used for layout, navigation bars, responsive grids, and card components. Links to Bootstrap CSS and JS files are included for styling and interactive behaviors like the navbar toggler.
   * What does it add to your website?
   It adds a professional and responsive layout, reducing the time needed for custom styling and ensuring compatibility across devices.

2. Popper.js
   * Why did you choose to use it over other alternatives? 
   Popper.js is included as a dependency for Bootstrap to handle popovers and tooltips, ensuring compatibility. It was chosen because it's required for Bootstrap's functionality.
   * How you used it? 
   Popper.js is included via a CDN to enable interactive elements like the dropdown menu for navigation (for smaller screens).
   * What does it add to your website?
   Popper.js is included via a CDN to enable interactive elements like dropdowns and tooltips.

3. jQuery
   * Why did you choose to use it over other alternatives? 
   jQuery is a lightweight JavaScript library that simplifies DOM manipulation and event handling. It is included here as a dependency for Bootstrap.
   * How you used it? 
   jQuery is included via a CDN to support Bootstrap's interactive components like modals and collapsible navigation.
   * What does it add to your website?
   It ensures seamless functionality for Bootstrap's features and simplifies handling cross-browser compatibility.
      
## Part 4: Design Iteration

First, for the project page, I initially planned to showcase the solution designs using static GIFs in columns, as this was easier to implement. However, I realized that a video carousel would make the presentation more interactive and engaging, better capturing users' attention. This led me to switch to a video carousel format. 

Second, for the hero section on the homepage, I initially planned to display static text. During implementation, I decided to add animated text that changes automatically, as it creates a dynamic and modern feel, while also drawing users into the content more effectively. 

These changes reflect my focus on making the website visually compelling and interactive.

## Part 5: Implementation Challenge

One challenge I faced was implementing the sticky navigation menu on the project page, while it initially directed users to the correct section, the content was clipped because the sticky navigation bar overlapped it. It took some time to identify the issue and resolve it by adding a scroll-margin-top to ensure proper display. 

Another challenge was creating the text-change animation effect for the hero section on the homepage. It required experimenting with CSS and JavaScript to achieve a smooth and visually appealing transition.

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | No | Yes | Yes | No |
| ChatGPT | Productivity | 4 | 4 | 6 | 6 | 4 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: It was particularly effective for debugging. For example, when I encountered errors in my code—especially those caused by small oversights—it helped me identify issues that were in my blind spot. This was invaluable when I was dealing with large chunks of code or errors I couldn’t immediately understand. Additionally, it provided guidance on incorporating the Bootstrap library into my project, such as how to structure my HTML and CSS to avoid conflicts. It was particularly helpful in ensuring the default Bootstrap styles didn’t override my custom CSS code. By suggesting adjustments like using more specific selectors or applying overrides via custom classes, it saved me time and helped maintain the consistency of my design.

* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: When I asked it to review my code for optimization, its suggestions often didn’t align with my goals. While it provided detailed advice, some of its recommendations were overly complicated or introduced unnecessary effects that I wasn’t looking for. For instance, it suggested adding animations to elements that didn’t need them, which made my design feel inconsistent with my intended style. This occasionally made the process of refining my code more time-consuming than expected, as I had to evaluate whether the suggestions were useful or counterproductive.

* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. ChatGPT: It did not heavily influence my final design and implementation plan because, ultimately, my decisions were based on my own knowledge and understanding of how to use Bootstrap effectively. While ChatGPT assisted in troubleshooting and occasionally provided helpful ideas, the core of my implementation was guided by my initial plan and personal design preferences. For example, when I wanted to achieve specific effects and asked ChatGPT for help, its responses were sometimes incomplete or failed to produce the desired result. As a result, I relied on my own experimentation and decision-making to achieve my design goals, ensuring that the final output matched my vision.

> Use patterns
* I accepted the generations when …  For example, 
  1. ChatGPT: It once suggested using Bootstrap’s built-in properties to transform the navigation links in the top navigation bar into a hamburger menu for smaller screen sizes. I adopted this suggestion because it ensured my design was responsive and aligned with modern web development standards. Implementing this feature was efficient and enhanced the user experience without compromising my custom styles.

* I critiqued/evaluated the generated suggestions by … For example, 
  1. ChatGPT: It once recommended using Bootstrap’s default video carousel controls to display a sequence of videos on my project page. However, I rejected this suggestion because it interfered with my custom styles and resulted in misaligned elements. Instead, I uploaded chevron icons and manually implemented video controls to ensure proper alignment and consistency with my CSS styling. This approach allowed me to maintain control over the final aesthetic and functionality of my website.


> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: It helped me think through complex technical issues, especially debugging and integrating libraries like Bootstrap, which made the development process more efficient. It also provided useful alternatives and suggestions, such as responsiveness techniques, which aligned with my goals in some cases and enhanced the quality of my design.
* Cons
  1. ChatGPT: It ccasionally provided overly complex solutions or suggestions that didn’t fit the specific context of my project, requiring additional time to review and adjust. Moreover, its inability to fully understand nuanced design requirements or custom styles sometimes limited its effectiveness in addressing my challenges.


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://chatgpt.com/share/6759153f-e630-8005-b1f3-9c2527aabf2c)

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

Throughout the course of my project, I have made several adjustments to my original implementation plan.

In Week 9, I successfully completed FP1 and used the feedback to decide on the final direction for my project, as planned. However, during Week 11, I found that my initial approach to the project changed slightly. Instead of beginning with the "About" page, I decided to start with the "Home" page, primarily because I wanted to experiment with a text change effect for the title in the hero section. This decision allowed me to incorporate an interactive feature early in the design, which enhanced the user experience and added a dynamic touch to the landing page.

After completing the "Home" page, I moved on to the "Project" page, which took more time than I had anticipated. I planned to have a sticky navigation menu on the left side of the page for content navigation. The idea was to allow users to click on navigation links and jump to different sections on the right side of the page. Getting the style for the sticky navigation right took a significant amount of time and attention, as I wanted to ensure that the menu was both functional and visually aligned with the overall design.

I did follow my plan for the later stages of the project. During the last two days, I focused on reviewing the entire portfolio website to ensure that everything was working smoothly, including checking the correct linkage of navigation, ensuring images displayed properly, and verifying that all functions were working as intended. 

While some of my tasks shifted in sequence and took more time than expected, I was able to stay on track and meet the project’s requirements. 

## Generative AI Use Plan Updates

In line with my original plan, I utilized ChatGPT for two main purposes during the development of my design portfolio website. Firstly, I used ChatGPT for debugging when I encountered error messages that I did not fully understand. When these errors arose, I would ask ChatGPT to explain the nature of the message and provide insights into potential causes. This helped me identify the root causes of the issues and find more efficient solutions.

Secondly, there were instances where some of my code did not work as intended, potentially due to conflicts between the default styles of the Bootstrap library and my custom css code. In these cases, I asked ChatGPT to review snippets of my css code to help resolve issues, such as code overriding problems with the Bootstrap library. ChatGPT provided suggestions that guided me in refining my code, ensuring that the styling and functionality aligned correctly.

I adhered to my original plan by using ChatGPT for these supportive tasks, focusing on debugging and improving code efficiency. As intended, I refrained from using it for final edits or critical decision-making.

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

The purpose of this project is to create a visually appealing and user-friendly portfolio website that effectively showcases my design projects and coding skills. The portfolio will serve as a dynamic representation of my work, aimed at attracting potential employers and demonstrating my proficiency in UX/UI design and web development. It will feature a home page, three projects that I have worked on, a photography page, an about page, and a resume page.

## High-Fi Prototypes

### *Prototype 1*

![prototype 1](./images_FP2/Prototype%201.png)

On the Landing Page, users appreciated the readable structure and engaging project images but suggested clearer project titles and making images clickable. The Project Page was praised for its intuitive navigation and the highlighted "How might we" section, but it would benefit from larger margins and consistent heading colors. On the Photography Page, users valued the easy navigation and personal perspective but recommended adding a theme, consistent spacing, and a carousel for improved photo display. The About Page images were well-received; however, participants suggested more descriptive headings and narrower text. Overall, users expressed that the top navigation bar was effective for easy access across pages.

### *Prototype 2*
![prototype 2](./images_FP2/Prototype%202.png)

Prototype 2 differed from Prototype 1 in terms of the navigation bar. Prototype 2 has a left-side navigation bar, and users found that the black color was visually overpowering and created a sense of division across the pages. While the sidebar placement of the logo and navigation tabs was unique, participants noted that the tabs were difficult to read due to their 90-degree rotation, which made navigation less intuitive. This layout was also seen as less cohesive overall, as the bold sidebar color contrasted sharply with the rest of the page content. Users expressed a preference for the design of prototype 1 as it feels more unified and offers easier readability in navigation.

## Usability Test

I conducted two usability test sessions with two participants over Zoom using the think-aloud protocol.  

In Prototype 1, users appreciated the Landing Page for its readable structure, clear focus on my name, and visually engaging project images. However, they suggested clarifying project titles for better understanding and making images clickable to improve navigation. Hence, for the final design, I clarified project titles and made images clickable, allowing users to explore projects more intuitively.

On the Project Page, the navigation bar and the emphasis on the "How might we" statement were positively received. Users recommended increasing the margins to prevent crowding. Therefore, I adjusted the margins from 100px to 200px across all pages, so as to improve readability for users. 

For the Photography Page, users appreciated how I used photos to convey how I view the world, but they suggested enhancing spacing consistency and adopting a thematic organization. To address this, I categorized the photos into themes, such as "sunset", "cherry blossoms", and "harbor", and implemented carousels for better presentation and smoother browsing, enhancing the page's flow and organization.

Meanwhile, feedback on Prototype 2 was more critical, particularly regarding the left-side sidebar. Users felt that the black color was too bold and created a division across the page, drawing their attention away from the content of the page. Additionally, the 90-degree rotation of navigation tabs made them difficult to read. That's why they preferred the design of prototype 1. Hence, I decided to finalize Prototype 1 as my preferred layout for the final design, since it better supports readability, consistency, and user-friendly navigation.

## Updated Designs
![Updated Designs](./images_FP2/Final%20Prototype.png)

Based on user feedback, I decided to use top navigation for my portfolio as it is intuitive and supports smoother navigation. I kept a white background as the main color with blue accents throughout the pages to maintain a consistent, cohesive design. To enhance readability, I increased margins so the text does not spread across the entire screen, making it easier to read. For the Photography page, I organized photos in themed carousels—such as “Sunsets” and “Harbors”—to improve visual flow and add structure, allowing users to browse images more naturally while conveying a clear aesthetic. 

## Feedback Summary

In the lab session, one key suggestion I received was to use a circular shape for my profile picture on the homepage. This change would not only add a modern, polished look, but also draw attention to my image, creating a welcoming, personal touch. More importantly, it helps distinguish my profile picture from other images, like mockups, adding a subtle but effective visual hierarchy.

Another recommendation was to update my project photos to showcase a wider variety, making the portfolio visually dynamic and giving a better sense of the range of work I have done. As per the feedback, I also revised the project descriptions to be more concise. By reducing the word count, I made each description easier to scan, which helps visitors quickly grasp the essence of each project.

Furthermore, my peers also gave feedback on improving readability. For example, they recommended reducing the line height in the project titles and narrowing the text box width. I adopted these suggestions because it helps create a more visually balanced look and makes it more comfortable to read, especially on larger screens.

On the About page, I considered the feedback of replacing cartoons with photos of myself or modifying the layout to make it more engaging. This would provide a more authentic representation and add a personal touch, aligning with the goal of presenting my unique identity. For the Photography page, my peer Liz suggested including a short introductory description. This addition would give viewers context for the images and enhance the narrative aspect of the page, helping to convey the themes and perspectives captured in my photography.

## Milestones

### *Implementation Plan*

- [x] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [x] Review feedback from FP1 and decide on which idea to be the final project
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [ ] FP2 due
  - [ ] Review feedback from FP2 to assess usability and design effectiveness
  - [ ] Refine final design based on feedback

- [ ] Week 11 Nov 11 \- Nov 15:  
  - [ ] Draft writing content for the portfolio
  - [ ] Prepare all the images needed for the portfolio
  - [ ] Code the About Page 

- [ ] Week 12 Nov 18 \- Nov 22:   
  - [ ] Code the Landing Page and Photography Page
  - [ ] FP3 due 
  - [ ] Iterate baed on feedback received for FP3

- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Code the project pages
  - [ ] Thanksgiving  

- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] Polish the overall design
  - [ ] Review the entire portfolio website, proofread the content, and check if the flows work
  - [ ] FP4 due 

### *Libraries and Other Components*

* Bideo.js: I plan to use it to add video loops of design-related visuals or scenes relevant to my work on the landing page. This will make the landing page more visually appealing, creating a welcoming yet dynamic first impression for visitors.

* Anime.js: It is a flexible animation library that I will use to enhance interactions across the portfolio. For instance, I plan to implement smooth transitions when hovering over project images, allowing them to slightly enlarge or animate with a bounce effect. I will also use it to bring in subtle animations when loading sections, like having text fade in or slide up, which adds a sense of depth and polish without overwhelming the viewer. 

* ReactJS: I will use React components to build each section (e.g. the project gallery, photography page, and about page) for consistency and reusability. For example, the project section will leverage reusable components for displaying projects, so I can easily update the portfolio by adding new projects without modifying the entire codebase. Moreover, I will also use React to manage state, such as handling actions like toggling carousels on the photography page or expanding content areas for a more interactive experience.

## Generative AI Use Plan

### *Tool Use*

* ChatGPT  
  * I will use ChatGPT to proofread the text of my design portfolio website. It can help streamline my writing process by providing suggestions and improving clarity. Moreover, I will use it for debugging since it can clarify error messages, helping me identify the root cause of problems more efficiently. Furthermore, I can have it review code snippets, gaining insights into potential inefficiencies or best practices that enhance code quality. 
  * However, I will not use it for final edits or critical decision-making because it might not fully capture my unique voice and design intentions. I will be the one to make final edits so that I can convey my personality in the portfolio.  
* GitHub Copilot  
  * I will use GitHub Copilot to enhance my coding efficiency while developing my portfolio website. It can assist me in writing code snippets, suggesting improvements, and offering real-time debugging support. This will help me learn best practices and speed up my coding process.
  * However, I will not rely on it for comprehensive programming tasks, as it may not understand the specific context of my project or provide optimal solutions for complex problems.

### *Responsible Use*

In using Generative AI tools, I will ensure responsible use by properly citing any contributions made by these tools in my work. I recognize the importance of evaluating the outputs generated by AI before adopting them into my projects, as this will help maintain the integrity and quality of my content. Additionally, I will take full responsibility for making final decisions on both content and design, ensuring that my unique voice and vision are accurately represented in my design portfolio. 

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1: Portfolio Website*

![Skethces of Portfolio Website](./images_FP1/Portfolio%20Website_Sketch.png)

>What is the basic idea of your final project? (1-2 sentences) 

The purpose of this project is to create a visually appealing and user-friendly portfolio website that effectively showcases my design projects and coding skills. The portfolio will serve as a dynamic representation of my work, aimed at attracting potential employers and demonstrating my proficiency in UX/UI design and web development.

>How do you plan to make your design interactive and engaging?  

I plan to include features such as hover effects, smooth transitions, and animated elements that respond to user interactions. The case studies will also be interactive as project details will be revealed upon clicking.

>How do you plan to make your design accessible?  

I will follow WCAG (Web Content Accessibility Guidelines) principles by using sufficient color contrast, providing alternative text for images, and ensuring all interactive elements can be navigated using a keyboard.

>What information do you specifically want to convey and include on your website?

I want to convey information that highlights my skills, experiences, and design philosophy. This will include a homepage, an about page detailing my background and interests, three project showcases with descriptions and visuals, and a resume page. 

### *Idea 2: Budget Tracker*
![Skethces of Budget Tracker](./images_FP1/Budget%20Tracker_Sketch.png)

>What is the basic idea of your final project? (1-2 sentences) 

The purpose of this project is to create a user-friendly budget tracker that allows individuals to monitor their daily or monthly spending. The app will help users categorize expenses, set budgets, and view a summary to keep their finances on track.

>How do you plan to make your design interactive and engaging?  

I plan to incorporate features like customizable spending categories, a progress bar that shows spending relative to budget, and simple data visualizations, such as pie charts for spending breakdowns. I’ll also add alerts and notifications to help users stay mindful of their spending.

>How do you plan to make your design accessible?  

I will use clear, high-contrast colors and large fonts for readability. Additionally, I’ll include descriptive labels for input fields, keyboard navigation for all interactive elements.

>What information do you specifically want to convey and include on your website?

I want to include information that helps users understand their financial habits, such as an expense input area, budget settings, and a spending summary. The website will also provide a monthly or daily summary.

### *Idea 3: Emotion Diary*
![Skethces of Emotion Diary](./images_FP1/Emotion%20Diary_Sketch.png)

>What is the basic idea of your final project? (1-2 sentences) 

The purpose of this project is to create an emotion diary website where users can log and track their daily emotions. The site will help users reflect on their emotional well-being over time, potentially revealing patterns and encouraging personal insights.

>How do you plan to make your design interactive and engaging?  

I plan to include features like a daily mood tracker with selectable emojis or icons, prompts that encourage reflection, and a calendar view for reviewing past entries. I may also add simple visualizations to show trends or shifts in mood over time.

>How do you plan to make your design accessible?  

I will use straightforward language, high-contrast visuals, and provide text alternatives for all icons. I’ll make sure all input fields and interactive components are accessible via keyboard navigation.

>What information do you specifically want to convey and include on your website?

The website will include a daily entry section for users to log emotions, an overview with recent entries, and visualization tools for tracking emotional trends over weeks or months. Additionally, I’ll offer a “reflection” section with prompts that encourage users to consider the reasons behind their emotions and any patterns they notice.

## Feedback Summary

For the Portfolio website project, feedback emphasized improving the information architecture for the home, case study, and about pages. My classmates and TA suggested reusing styles, creating templates, and organizing files into folders to enhance code organization and maintainability. For instance, a well-structured codebase would facilitate easier updates and scalability in the future. They also advised that if I use a pre-existing template, I should personalize it to showcase my unique skills and aesthetic preferences, ensuring the site reflects my learning and stands out from generic designs commonly seen online. For interactivity, hover effects were recommended instead of pre-loading elements, which would enhance user engagement by providing a more dynamic browsing experience.

In the Budget Tracker project, critiques highlighted the importance of user privacy and the incorporation of advanced features. My classmates recommended implementing AI-driven categorization to simplify user input, thereby creating a more intuitive and streamlined experience for users managing their finances. Privacy concerns were raised regarding the sensitive nature of the financial data users would input.

The Emotion Diary project received feedback focused on enhancing user interaction and data visualization. Suggestions included using customizable pie charts and other graphic representations to provide clearer insights into emotional trends over time. Additionally, they encouraged me to collect more diverse data to support varied visual displays and facilitate deeper analysis of users' emotional patterns. Optional note-taking and a feature to mark special entries with a star were proposed to increase user engagement and personalization. Furthermore, allowing users to create accounts was advised to ensure data security and retention.

Overall, the feedback encouraged me to prioritize core functionality while considering nice-to-have features if time permits, allowing for a balance between essential and enhanced user experiences.


## Feedback Digestion

Based on the feedback received during the critique session, I will prioritize the following suggestions:

For the Portfolio website, I plan to implement the recommendation to create templates, as this will streamline development and facilitate future updates. Personalizing a pre-existing template is also a priority, as it will showcase my unique skills and design philosophy, setting my portfolio apart from others. Additionally, I will incorporate hover effects to foster a more interactive experience, ensuring that visitors engage actively with my portfolio rather than passively reading through it.

In the Budget Tracker project, addressing privacy concerns is paramount, given the sensitivity of financial data. While the suggestion to use AI-driven categorization is appealing, as it could simplify user input and enhance usability, I may ultimately dismiss it due to potential complications in ensuring data privacy and security. I want to prioritize building a solid foundation focused on user trust before incorporating more complex features.

For the Emotion Diary, the feedback on data visualization and user interaction resonated strongly with me. I plan to integrate customizable pie charts and varied visual displays to provide deeper insights into emotional patterns, enhancing user engagement. Moreover, I will implement features that allow optional note-taking and the ability to mark significant entries, as these will encourage users to reflect more meaningfully on their emotions.

Overall, I am more inclined toward the Emotion Diary project because it aligns closely with my personal interests. My classmates also highlighted its significant potential for development due to its unique concept. Unlike the Budget Tracker, which may present privacy concerns, the Emotion Diary offers a creative avenue to explore emotional well-being without the same level of sensitivity associated with financial data, making it an exciting project to develop further.
