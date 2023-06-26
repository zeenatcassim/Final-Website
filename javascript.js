//Main Navigation 
const designBtn =document.getElementById("goToDesignBtn");
if(designBtn){
designBtn.addEventListener("click", function(){
 window.location.href="Design.html";
});
}

const essayBtn = document.getElementById("goToEssayBtn");
if(essayBtn){
essayBtn.addEventListener("click", function(){
window.location.href ="essay.html";
});    
}


const portfolioBtn  = document.getElementById("goToPortfolioBtn");
if (portfolioBtn){
portfolioBtn.addEventListener("click", function(){
window.location.href="Portfolio.html";
});    
}


const weeklyBlogsBtn = document.getElementById("goToBlogsBtn");
if(weeklyBlogsBtn){
weeklyBlogsBtn.addEventListener("click", function(){
window.location.href="weekly blogs.html";
});    
}


const homeBtn = document.getElementById("goToHomeBtn");
if(homeBtn){
homeBtn.addEventListener("click", function(){
window.location.href="index.html";
});    
}



//Essay
const assignTwoEssayBtn = document.getElementById("assign2Btn");
const examEssayBtn = document.getElementById("examBtn");
const essayContent = document.getElementById("essay-content-0");
const essayContentTwo = document.getElementById("essay-content-1");
const essayContentThree = document.getElementById("essay-content-2");
const essayContentFour = document.getElementById("essay-content-3");
const essayContentFive = document.getElementById("essay-content-4");
const essayContentSix = document.getElementById("essay-content-5");
const essayContentSeven = document.getElementById("essay-content-6");
const essayContentEight = document.getElementById("essay-content-7");
const essayContentNine = document.getElementById("essay-content-8");

const essays =[
    {
        id: 1,
        text1:"In this essay, I am going to analyse the Takealot website and then discuss the ethics behind its interaction design. First, I am going to explain the concepts of interface and interaction before I present an explanation and then detailed analysis on the user interface and user experience of the Takealot website. This will be followed by a discussion about the user interface and experience and finally a conclusion to end this essay. All websites have an interface. The interface is a symbolic representation of interaction or it can be said that users are able to interact with a website through its interface. This is due to the fact that the interface is a platform to symbolize, express and make interaction possible for website users (Geyser 2023). ",
        text2:"Thus, when website developers organise and display information on websites, they do it through its interface. However, because interaction with a website requires website users to take decisions in what they want to read or do next, developers need to design and plan the user interface and user experience wisely because these two factors have a huge impact on whether users interact successfully or unsuccessfully with a website (Geyser 2023). The user interface of a website is the visual elements or graphics present in the website that users are able to see and read (Geyser 2023). Because if this, it is also the visual aspect of interactivity. Interactivity is also a system that conveys meaning, it is made up of interface elements that have two very important components to them; one, is how it looks and second, what does it do (Geyser 2023). Since the user interface is the visual aspect of websites, it is important that interface elements look like the action they are supposed to perform.  The user interface is affected by factors such as visual structure, page layouts, colours, fonts, hierarchy and accessibility (Geyser 2023). These factors are what makes a website look attractive and appealing but these should also aim to strive for clarity, to make information accessible, easy to find, easy to read and easy to understand. ", 
        text3:"The user experience of a website are the evoked emotions websites users feel or experience when browsing through a website (Goldberg 2023). These emotions are based on how users feel when they see and interact or make decisions on websites. Also, these come from users and their response to the user interface of a website. If a certain font was chosen, then is it legible and readable for the user? If the website content is centred to the middle and then sideways, is the website balanced and aligned to the middle? Therefore, the design choices and visual elements from the user interface evokes a feeling in the user and this affects the user experience.  On the Takealot website, most content is situated towards the middle of the webpage. This space is divided into having a list of products on the right side that the user can scroll through and on the left side is a list of categories that the user can click on to see a list of products from there.  ",
        text4:"This is the same for the homepage. A list of categories the user can look through is on the left side of the webpage while recommendations or adverts and more products are situated to the right but towards the bottom. However, at certain webpages, there are more advertisements on the right side of the page while the lists of products are moved towards the left side of the page. Thus, the viewer gaze moves from left to right then downwards and then from left to right again.  The website uses square blocks to present available products on the website. These all have images to show what the product looks like, followed by a title, then the price, a heart icon on the top right corner to add the product to your wish list and extra information that shows if it’s on stock, where it gets shipped from and ratings. Lastly the square has a green button where users can add the product to their cart. This button has a hover function where the background gets filled and the text turns white. Although just hovering above the square block with the product changes the cursor which informs users that this is interactable and that they can click on it if they wish to do so.  Clicking on a product lets website users read extra information about the product, find recommendations based on the product, a description, more information on the product, followed by reviews and then more recommendation. This information all is presented in square blocks with white backgrounds. Normal text is either black or grey but the one’s that is interactable, the user can click to find more products or get answers for questions they might be having, is in blue and the cursor changes when users hover above it. Other interactable points users can click on are icons, are in the colour green, the cursor changes when hovering above it and some display extra information when the cursor hovers above it. ",
        text5:"The white squares stand out against the light grey background of the webpage, putting more emphasis on the list of recommended products. As stated above, most interaction points lets the cursor change its icon, has a hover function where the background gets filled and the text changes colour. Also, importantly users view text in blue but these are actually interactable points that lets the viewer navigate between other pages of the website. The website mainly uses the colours grey, blue, white and black. The website uses the convention of having interactable text in blue, important information highlighted in bold while normal text is grey. Due to the light grey and white backgrounds, the blue text or icons in blue, including other interaction points in colours like green or red, stand out even more. On the homepage, the navigation bar is actually viewed as a drop-down menu on the left side of the webpage. The heading has a dark grey background while the text is white but this isn’t interactable. The list below is text in grey but upon hovering above it, the background of the text turns to blue and a new panel appears next to the bar with most text that gives the user a more detailed list of categories they can click on and view the products in that specific category. Next to this is a search bar and below these are more options to click on to view more products to buy. Above this is the website logo and more text users can click on to view more information about Takealot or their account and more extra information such as what products they added to their cart or wish listed. The user interface and user experience of Takealot.com is easy and simple to read and understand. Content and information is centred towards the middle with each section next to each other but there is sufficient space between each one. This makes it easy for the website user to read since there is space to rest their eyes on the webpage.",
        text6:"It is also easy to view products and choose what to buy because they are appear as square blocks and have sufficient space between them to not overwhelm the user.  Also, because these blocks have a light grey background, the information of the product stands out and easily catches the user’s attention. The button to add a product to your cart is at the button of this square block which works well to direct the viewer gaze and also logically works well. However, website users have a choice to decide how they want to view their products. Instead of viewing them in small blocks, next to each other. Users can decide if they want to view the website’s products as a list. With this, the product’s information is still confined to a square block but the difference is that users have to scroll down because each product appears below one another. As stated above, the convention of using colours to suggest that a text is interactable is an efficient and understandable practice in the website that is consistently used. This works well because the website user becomes used to this and begins to expect to see this everywhere on the website. ",
        text7:"The Takealot website makes use of conventions website users already know of to effectively communicate the website’s interface to them. The website presents their products in the confines of a square block to present it in a coherent manner and to direct the viewer gaze in a logical direction. Also, the use of minimal colours with additions of bright blues around the websites gives it a cool and relaxed atmosphere. The addition of bright blue at certain places of the website helps to attract the user’s attention to deals or promotions happening. Therefore, with this reasoning, it can be deduced that the user interface and user experience of the Takealot website is simple but it effectively presents content and important information to website users. Due to this simple but effective visual structures, users are able to understand visual hierarchies and navigate their way to different webpages. ",
        text8:"Reference List: Geyser, H. 2023. Interaction Design, 16 March 2023. Lecture notes (WSOA3028A). Johannesburg: University of the Witwatersrand. Geyser, H. 2023. Interaction Design - IA, UI and UX, 30 March 2023. Lecture notes (WSOA3028A). Johannesburg: University of the Witwatersrand. Goldberg, P. 2023. A Crash Course In User Experience Interface Design. Lecture notes. (WSOA3028A). Johannesburg: University of the Witwatersrand."
    },
    {
        id:2,
        text:"In this essay, I am going to explain what the Statement of AI Risk is, what AI risk is or what the dangers of AI are, then discuss the impact of algorithmic systems and AI on the internet and why this relation of AI and algorithms to the internet is profound and linked to AI risk.  The Statement on AI Risk is a statement in which many AI scientists and many other notable people from varying careers participated in signing the declaration that more focus should be given to reducing risks from AI or in other words, reducing the risk of human extinction must be prioritised with other societal risks such as pandemics, nuclear wars, etc. Released by CAIS, the Center for AI Safety. This statement was created and signed due to the growing concern regarding AI and its risks. ", 
        text1:"AI risk is the possibility that Artificial Intelligence can contribute to human extinction and threaten the existence of humanity on a large scale. AI has been found to harm humans by spreading misinformation and/or disinformation, manipulating human beliefs and behaviours and creating a labour crisis. Although they may seem trivial or to have no profound effect on humans, these issues are alarming and need to be paid more attention to. This is the reason why the statement was released. For more people to become aware of the dangers of AI. Artificial intelligence is often thought to be neutral or a tool that only reflects the world in which we live in. However, AI is more complex than that. The code used to program AI systems and the digital content, these AI systems circulate around not only reflects society; it also produces it (Ballatore, A., Graham, M. and Sen, S., 2017 : -1195). This is one of the reasons, AI has proven to be a threat and risk to human existence. ",
        text2:"Information has geography and is always changing (Graham, M., De Sabbata, S. and Zook, M.A., 2015: 88). With time, information has been compiled and circulated to many users through the use of technological devices called immutable mobiles. In these devices, information has been compiled together to form a particular geography of information of a particular place(Graham, M., De Sabbata, S. and Zook, M.A., 2015: 89). Along with shaping how people find and understand the place, these geographic augmentations become more than just representations of places, they also start to shape it (Graham, M., De Sabbata, S. and Zook, M.A., 2015: 89). Misinformation and disinformation is problematic but when the algorithm systems of our newsfeeds, social media and any other news sharing platform on our technological devices contains these types of information in their learning data, it will circulate these to users through their immutable mobiles. As a result, perpetuating biases of gender, race and many other social issues, inciting division between people of different beliefs of these social issues and ultimately leading to political unrest. ",
        text3:"The problem also lies with the information, algorithms and immutable mobiles contain about a particular place. If the geography of information about this particular place contains misinformation and disinformation, people who are going to read about this place will read inaccurate information, possibly biases and prejudices even. Based on this, they will have a misconception about the place and if they meet people from this place in future, they will be biased towards them because of the misinformation they read. As seen from above, AI and algorithm systems are capable of manipulating people and their beliefs through the information these people are exposed to and can read anywhere on the internet or their newsfeeds. At first, this statement can be disagreed with. People can challenge this by stating that information about places or certain topics should only be read from specific and trusted sources. This argument is true and makes sense. People need to be aware if whether the sources of their news articles and other information comes from credible sources. ",
        text4:"However, then the problem of how many credible and trusted sources can you find on the internet arises. People looking for and reading information on the internet need to be aware of how true and credible it is but what if they have no way of finding this out? It is important to note that when people search for information on the internet, they use a search engine to look for what they want to. However, what if the results from this search engine is dubious? To sort through all the information available on the internet, we have and use search engines. Many people think that the information they receive from using the search engine is nonfiltered and impartial. This is untrue since search engines don’t just direct people to the information they are looking for, they also distinguish between which ones are more and less relevant content to show to the user (Ballatore, A., Graham, M. and Sen, S., 2017 : 1195).  They and global mediators determine what becomes visible to whom, in a way they are shaping “public discourse” and ultimately society (Ballatore, A., Graham, M. and Sen, S., 2017 : 1196).",
        text5:"Search engines and geographic information exert a lot of power because they circulate information to everyone around the world. This is due to the fact that information shares knowledge to people and can also mould the world into whatever shape it wants to. The impact of AI and algorithms on the internet is thus, so profound that by sharing certain information or even inaccurate information creates a huge ripple effect on the internet. Users either accept it as true while others call out the information as false. This goes on until a reliable source deems it as true or false or it dies down and no one talks about it on the internet for a while. This is why the digital divide between people is big and concerning. Social capital influences digital divide and because those with social capital can access resources no one else can, they continue to maintain the inequalities between people online, its either people don’t have access to internet or if they do, they don’t have the skills required to effectively use it or they don’t wish to use it unless they have to such as not going on social media and only using the internet for work purposes (Ragnedda, M. and Ruiu, M. L. 2017: 7 & 8). ",
        text6:"With digital divide existing between people, there is a lack of resources between them because those in the lower spheres are more exposed to the dangers of AI and misinformation/disinformation from algorithms. They are not aware of AI risk like how people with social capital and who are higher in the spheres of digital divide are. However, does this mean that people on a higher level of social capital and digital inequality are less prone to AI risk or does this effect vary depending on the amount of resources a user has? Are the people who program and add AI to their products immune to AI risk? How are they effected by AI risk? Perhaps the effect differs for people on different standings on the digital inequality sphere?  ",
        text7:"Nonetheless, the risk of AI does exist and it affects everyone. AI risk needs to be paid more attention to and dealt with. The risk of AI has grown more because of algorithms systems, their digital code and their content on the internet. Geographic information and search engines have also contributed to this. With the amount of blind trust people have in these systems, if not previously knowledgeable about the new information they find or look for on the internet, they will believe it. ",
        text8:"Reference List: Ballatore, A., Graham, M. and Sen, S., 2017. Digital hegemonies: the localness of search engine results. Annals of the American Association of Geographers, 107(5), pp.1194-1215. Graham, M., De Sabbata, S. and Zook, M.A., 2015. Towards a study of information geographies:(im) mutable augmentations and a mapping of the geographies of information. Geo: Geography and environment, 2(1), pp.88-105. Massimo Ragnedda and Maria Laura Ruiu (2017) Social capital and the three levels of digital divide. In Ragnedda M., Muschert G. eds. (2017), Theorizing Digital Divides, Routledge, pp. 21-34. Paul, K. 2023. The Guardian. Robot takeover? Not quite. Here’s what AI doomsday would look like. Online. Robot takeover? Not quite. Here’s what AI doomsday would look like | Technology | The Guardian . 22/06/2023. ",
    }
]

if(assignTwoEssayBtn){
    assignTwoEssayBtn.addEventListener("click", function(){
    essayContent.textContent = essays[0].text;
    essayContentTwo.textContent = essays[0].text1;
    essayContentThree.textContent = essays[0].text2;
    essayContentFour.textContent = essays[0].text3;
    essayContentFive.textContent = essays[0].text4;
    essayContentSix.textContent = essays[0].text5;
    essayContentSeven.textContent = essays[0].text6;
    essayContentEight.textContent = essays[0].text7;
    essayContentNine.textContent = essays[0].text8;
    });
}


if(examEssayBtn){
    examEssayBtn.addEventListener("click", function(){
    essayContent.textContent = essays[1].text;
    essayContentTwo.textContent = essays[1].text1;
    essayContentThree.textContent = essays[1].text2;
    essayContentFour.textContent = essays[1].text3;
    essayContentFive.textContent = essays[1].text4;
    essayContentSix.textContent = essays[1].text5;
    essayContentSeven.textContent = essays[1].text6;
    essayContentEight.textContent = essays[1].text7;
    essayContentNine.textContent = essays[1].text8;
    }); 
}

//Design Section 
const designBtn1 = document.getElementById("designDoc1Btn");
const designBtn2 = document.getElementById("designDoc2Btn");
const impNotesOne = document.getElementById("implementNotesBtn");

const notesTitle = document.getElementById("title"); 
const notesParOne = document.getElementById("parOne");
const notesParTwo = document.getElementById("parTwo");
const notesParThree = document.getElementById("parThree");
const notesParFour = document.getElementById("parFour");
const notesParFive = document.getElementById("parFive");
const notesParSix = document.getElementById("parSix");

const designDocument = [
    {
        id: 1,
        titleOne:"Design Document",
        paragraphOne: "My goal and aesthetic for this website is to have all content situated towards the middle so that viewers don’t feel overwhelmed with different content placements and use cold colours to evoke a calm and relaxed atmosphere. I wanted the website’s font to be easy and legible to read but also look a bit attractive, that’s why I used sans serif because this font is very easy on the eyes, it doesn’t strain the viewer’s eyes when reading.",
        paragraphTwo: "I used cold colours between the shades blue and purple because these colours give off a very relaxed and calm atmosphere and it will be easy on the viewer’s eyes when reading the website’s content, I used light blue and purples as backgrounds for the paragraphs by the weekly blogs, design section, essay and portfolio but then reduced the transparency so that the words stand out more, the paragraphs seem separated from the foreground and this also lets the information hierarchy, that the paragraphs with a light background are sub sections of the main title, more visible to the viewer.",
        paragraphThree: "I made all content situated towards middle of webpage because this makes hierarchy of information easier to understand and follow for viewer. Along with this, the hierarchy of information is symmetrically balanced so that all content stays in the middle and the user flow is directed in one direction. Also, viewers don’t end up feeling like elements are at odd places of webpage or that there is missing information at some sub sections.",
        paragraphFour: " All content is nested; main titles are the parents and the paragraph below is the child. This is how the content is presented and repeated because most websites follow this convention and it works very well, I didn’t want to break this understanding. Everything is aligned to create harmony. As stated above, the user flow is directed in one direction and users don’t end up being confused and can predict or expect what information hierarchy will appear next. If content isn’t aligned, viewers will feel confused and immediately think that this is a bad website because then content won’t be presented properly and viewers won’t be able to learn information from the content.",
        paragraphFive: " All interactable elements in the website are anchor tags that have round borders around them to look user friendly and interactable. The border lines aren’t thick to give it a smooth look and they have light background colours to make the text stand out. When viewers hover their cursor over it, the background changes to black and text to white to convince them even more that this is interactable and will take them to another webpage or subsection on that same webpage.",
        paragraphSix:" The navigation bar is situated at top right, it has rounded edges to, again, look user-friendly and that it is interactable. These are also anchor tags and thus, when the viewer hovers above them, it will change colour to indicate that this is interactable. The last interface element is a scroll up button that I have placed at the bottom right corner of the webpage. Its position is fixed so that wherever the viewer scrolls to, they will see this element and click on it if they want to go back to the top of the page.",
    }, {
        id: 2,
        titleOne:"Design Document",
        paragraphOne: "My goal and aesthetic for this website is for the content to look interesting but the website to look elegant and stylish while the interface must be easy and understandable to use. Since I have to make a portfolio website, the content of the website is all about me and my work, work I did in the semester and creative work I did in the past. That is why I have to focus on making the work look interesting and the website interface to look simple, understandable but also elegant. That is my goal for this website. To not only make it look stylish but also for the interface, UI and UX to be easy to understand, use and responsive to the user. ",
        paragraphTwo: "I have divided the website’s content into five web pages; a homepage, design, essay, weekly blogs and lastly a portfolio webpage. The homepage will have information such as who I am, what I do and they will be given options as to what other information they can choose to read. The essays, weekly blogs, portfolio and design section are all separated because this would be too much information to place in one web page. In these web pages, information is separated into their own categories because it is easier for the user to find and access the information. This way, they can understand how to use the website and quickly adapt to its conventions. ",
        paragraphThree: "I want the user’s movement must be guided downwards. Users must read information and when it is time to make a decision, that decision should be down below the information user just read. Users  must not have to struggle and navigate to other places on the website to look for the interface where they must make a decision. ",
        paragraphFour:"I have used input controls such as buttons in the interface. Users can click on them to go to another section of a web page or to another web page. Buttons are rounded but not too rounded because I want them to look user friendly but also serious. In the second point on interaction, users can click on coloured text in a paragraph below the web page’s heading to go to a specific section of webpage. This specific-coloured text correlates to topic, the user can click on it to read if they want more information on it. ",
        paragraphFive:"I used monochromatic colours as a colour theme for the website. I used light shades of brown and white for the backgrounds so that it doesn’t strain the user’s eyes and I used blue or darker grey to add some colour to the website so it doesn’t look too dull. Previous times I used bright colours but this time I decided to use these colours because they are easy and comfortable on the eyes, they don’t hurt or strain the user’s eyes. ",
        paragraphSix:"I have tried to use symmetrical balance in this website so that everything looks well balanced. The hierarchy consists of a heading, which is an entry point. Users must read this first and then the content below. The content in the website uses the similarity and repetition aspects of harmony so that elements seem repeatable with other elements and elements are copied numerous times throughout website to establish conventions.",
    },{
        id:3,
        titleOne:"Implementation Notes",
        paragraphOne:"I have used simple naming for my folder; web page title followed by whether it is a html, CSS or JavaScript file. They are separated into their respective concerns but the folder structure does not really reflect the hierarchal information or structure. ",
        paragraphTwo:"I have tried to make the user interface as simple as possible. Interaction points look different from normal text and when users hover above them, a change occurs that informs the user that this is interactable. I have tried to make the content on this website expressed fully and correctly. ",
        paragraphThree:"I am expressing interaction points using JavaScript. I have made the navigation bar of the website purely with JavaScript, I did not use anchor tags at all. In the essay and design webpages, I have use JavaScript to add and then change the text content in the section below. However, I was not able to do this for the wireframe buttons because the code did not want to work. I had to use anchor tags so that when the user clicks on them, they can find the wireframes. In the essay and design section, the user has to click on the text, that correlates to the information they want to read, and the text or information will appear below. ",
        paragraphFour:"I have tried to stick to one naming convention to link html to css. At times, this has changed because I forgot to follow the convention. For this website, I made more effort in avoiding using too many in-line styles, I rather added the css style to a section or article html element. ",
        paragraphFive:"",
        paragraphSix:"",
    }
]

if(designBtn1){
    designBtn1.addEventListener("click", function(){
    notesTitle.textContent = designDocument[0].titleOne;
    notesParOne.textContent = designDocument[0].paragraphOne;
    notesParTwo.textContent = designDocument[0].paragraphTwo;
    notesParThree.textContent = designDocument[0].paragraphThree;
    notesParFour.textContent = designDocument[0].paragraphFour;
    notesParFive.textContent = designDocument[0].paragraphFive;
    notesParSix.textContent = designDocument[0].paragraphSix;
    });
}

if(designBtn2){
    designBtn2.addEventListener("click", function(){
        notesTitle.textContent = designDocument[1].titleOne;
        notesParOne.textContent = designDocument[1].paragraphOne;
        notesParTwo.textContent = designDocument[1].paragraphTwo;
        notesParThree.textContent = designDocument[1].paragraphThree;
        notesParFour.textContent = designDocument[1].paragraphFour;
        notesParFive.textContent = designDocument[1].paragraphFive;
        notesParSix.textContent = designDocument[1].paragraphSix;
    });
}

if (impNotesOne) {
    impNotesOne.addEventListener("click", function(){
        notesTitle.textContent = designDocument[2].titleOne;
        notesParOne.textContent = designDocument[2].paragraphOne;
        notesParTwo.textContent = designDocument[2].paragraphTwo;
        notesParThree.textContent = designDocument[2].paragraphThree;
        notesParFour.textContent = designDocument[2].paragraphFour;
        notesParFive.textContent = designDocument[2].paragraphFive;
        notesParSix.textContent = designDocument[2].paragraphSix;
    })
}
