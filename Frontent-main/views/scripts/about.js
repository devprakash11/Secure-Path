// Object to store content for each section
const contentData = {
    aboutUs: {
        title: "About Us",
        content: `<strong>At Secure Path</strong>, we believe that software should do more than just function — it should make you <em>genuinely happy</em>. Our mission is to design intelligent, user-centric solutions that simplify your workflow, empower your team, and enhance your customer experience. <br>
                  We are passionate about creating delightfully smart software that not only solves problems but brings a sense of clarity, efficiency, and confidence to your operations. Backed by exceptional human support, we ensure that every interaction adds value — because technology should feel personal, helpful, and reliable. <br>
                  With Secure Path, you gain more than just tools — you gain a trusted partner committed to helping you work smarter, attract and retain top talent, and build lasting relationships with happier, more satisfied customers.`,
    },
    history: {
        title: "Our History",
        content: `
            Founded with a clear vision to revolutionize the way organizations approach software and safety training, Secure Path began its journey with a simple but powerful belief: <em>software should make you happy</em>. Recognizing the growing need for intuitive, human-centered digital solutions in the workplace, the company set out to design software that not only solves problems but also brings joy to its users. <br> <br>

            From day one, Secure Path has been committed to developing delightfully smart software—tools that are easy to use, highly effective, and backed by exceptional human support. This dedication stems from our core mission: to help teams work better, empower companies to hire and retain smarter employees, and ultimately, enable businesses to build happier, more loyal customers. <br> <br>

            Over the years, Secure Path has grown from a small idea into a trusted name in smart software solutions, particularly in the area of project safety training and compliance. Our relentless focus on innovation, user experience, and customer satisfaction continues to drive our success and shape the future of workforce safety and performance.


        `,
    },
    mission: {
        title: "Our Mission",
        content: `For us, business is personal. We are privately-owned and don’t have to worry about meeting short-term investors’ demands. Secure Path is customer-funded instead of venture-funded. This gives us the right environment to operate in a way that is completely customer-driven and we can build <strong>delightful products with simple, honest pricing</strong> We are building a 100-year company and invest in products and employees with a long-term vision. Long-term growth means we can invest in extraordinary experiences for our customers and build extraordinary careers for our employees. <br> If it’s right, we will do it, irrespective of the bottom line. That’s the way we like it.

`,
    },
    vision: {
        title: "Our Vision",
        content: `At Secure Path, our vision is to empower organizations through delightfully smart software and exceptional human support. We aim to revolutionize the way businesses operate by enabling smarter work, nurturing more capable teams, and fostering meaningful customer experiences — ultimately creating a happier, more connected digital world`,
    }
};

// Function to swap content dynamically
function swapContent(section) {
    const pageTitle = document.getElementById("page-title");
    const pageContent = document.getElementById("page-content");
    const historyBtn = document.getElementById("history-btn");
    const missionBtn = document.getElementById("mission-btn");
    const visionBtn = document.getElementById("vision-btn");

    // Update the content dynamically
    if (section === "history") {
        pageTitle.textContent = contentData.history.title;
        pageContent.innerHTML = contentData.history.content;
         // Use innerHTML to render HTML

        // Update button text
        historyBtn.textContent = "About Us";
        historyBtn.setAttribute("onclick", "swapContent('aboutUs')");
        missionBtn.textContent = "Our Mission";
        missionBtn.setAttribute("onclick", "swapContent('mission')");
        visionBtn.textContent = "Our Vision";
        visionBtn.setAttribute("onclick", "swapContent('vision')");
    } else if (section === "mission") {
        pageTitle.textContent = contentData.mission.title;
        pageContent.innerHTML = contentData.mission.content; // Use innerHTML to render HTML
        
        // Update button text
        missionBtn.textContent = "About Us";
        missionBtn.setAttribute("onclick", "swapContent('aboutUs')");
        historyBtn.textContent = "Our History";
        historyBtn.setAttribute("onclick", "swapContent('history')");
        visionBtn.textContent = "Our Vision";
        visionBtn.setAttribute("onclick", "swapContent('vision')");
    } else if (section === "vision") {
        pageTitle.textContent = contentData.vision.title;
        pageContent.innerHTML = contentData.vision.content; // Use innerHTML to render HTML
        
        // Update button text
        visionBtn.textContent = "About Us";
        visionBtn.setAttribute("onclick", "swapContent('aboutUs')");
        historyBtn.textContent = "Our History";
        historyBtn.setAttribute("onclick", "swapContent('history')");
        missionBtn.textContent = "Our Mission";
        missionBtn.setAttribute("onclick", "swapContent('mission')");
    } else if (section === "aboutUs") {
        pageTitle.textContent = contentData.aboutUs.title;
        pageContent.innerHTML = contentData.aboutUs.content; // Using textContent for non-HTML content
        
        // Reset buttons to their original text
        historyBtn.textContent = "Our History";
        historyBtn.setAttribute("onclick", "swapContent('history')");
        missionBtn.textContent = "Our Mission";
        missionBtn.setAttribute("onclick", "swapContent('mission')");
        visionBtn.textContent = "Our Vision";
        visionBtn.setAttribute("onclick", "swapContent('vision')");
    } 
}
