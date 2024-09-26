// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Close hamburger menu when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideHamburger = hamburger.contains(event.target);
    const isClickInsideNav = nav.contains(event.target);

    if (!isClickInsideHamburger && !isClickInsideNav) {
        nav.classList.remove('active');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Timeline duration calculation
function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate === "today" ? new Date() : new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years > 0 ? years + ' yıl' : ''} ${months > 0 ? months + ' ay' : ''}`.trim();
}

document.querySelectorAll('.timeline-date').forEach(function (element) {
    const startDate = element.getAttribute('data-start-date');
    const endDate = element.getAttribute('data-end-date');

    const durationText = calculateDuration(startDate, endDate);
    element.querySelector('.duration').textContent = durationText;
});

// Close menu after clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('active');
    });
});

// Language switcher
var userLang = navigator.language || navigator.userLanguage;

function setLanguage(lang) {
    if (lang.includes('tr')) {
        document.querySelector('.hero-content h1').textContent = "Merhaba, Ben Mirac Altınay!";
        document.querySelector('.hero-content p').textContent = "Bilgisayar Mühendisi";
        document.querySelector('a[href="#experience"]').textContent = "Çalışmalarıma Göz At";
        document.querySelector('.experience-title').textContent = "Deneyimler";
        document.querySelector('.experience-subtitle').textContent = "Mesleki yolculuğuma dair kısa bir özet";
        document.querySelector('#projects h2').textContent = "Projelerim";
        document.querySelector('.skills-title').textContent = "Yeteneklerim";
        document.querySelector('.skills-subtitle').textContent = "Uzmanlık Alanlarım";
        document.querySelector('#contact h2').textContent = "İletişim";
        document.querySelector('#contact p').textContent = "Benimle iletişime geçmek isterseniz, e-posta gönderebilir veya sosyal medya hesaplarım üzerinden ulaşabilirsiniz.";
        // Navigation
        document.querySelector('a[href="#hero"]').textContent = "Hakkımda";
        document.querySelector('a[href="#experience"]').textContent = "Deneyimler";
        document.querySelector('a[href="#projects"]').textContent = "Projeler";
        document.querySelector('a[href="#contact"]').textContent = "İletişim";

        // Hero Section
        document.querySelector('.hero-content h1').textContent = "Merhaba, Ben Mirac Altınay!";
        document.querySelector('.hero-content p').textContent = "Bilgisayar Mühendisi";
        document.querySelector('.btn').textContent = "Çalışmalarıma Göz At";

        // About Section
        document.querySelector('.hero-about p').textContent = "Tam ismim Abdulmiraç olsa da Mirac'ı kullanmayı tercih ediyorum; Selçuk Üniversitesi Bilgisayar Mühendisliği mezunuyum ve Ocak 2022'den bu yana Londra merkezli zero2hero projesinde aktif olarak çalışmaktayım; kariyerime yazılım geliştirme ve mobil uygulama geliştirme alanlarında yoğunlaştım, özellikle zero2hero projesi bana takım çalışması ve profesyonel iş hayatı konusunda büyük tecrübeler kattı, bu süreçte projenin mobil uygulamasının geliştirilmesi ve bakımı gibi önemli sorumluluklar üstlendim, ayrıca backend tarafında endpoint geliştirilmesi gibi teknik konularda da aktif rol aldım; kariyerimin başında, yine Londra merkezli bir başka şirket olan Oasis Software Tech'te kısa dönem staj yaparak önemli deneyimler kazandım; kendi başıma hem backend hem de mobil alanda geliştirdiğim projelerden bazıları, mezuniyet projem olan Arty Mates uygulaması, Investit Beta kripto portföyü mobil uygulaması ve LifeBall sosyal halı saha uygulamasıdır, bu projeler sayesinde ExpressJS, MongoDB, Neo4j, Docker Compose, RESTful API, Flutter, Firebase Auth gibi teknolojilerde uzmanlık kazandım; profesyonel yaşamımda, takım çalışması ve iletişim becerilerimi sürekli geliştirerek projelere yenilikçi çözümler getirmeye odaklanıyorum, hedefim mobil uygulama geliştirme ve backend teknolojileri alanında kendimi sürekli geliştirerek bu alandaki en iyi uygulamaları hayata geçirmektir; iyi derecede İngilizce bildiğimi de belirtmek isterim; referanslarım ve detaylı bilgi için LinkedIn profilime ve GitHub hesabıma göz atabilirsiniz.";

        document.querySelector('.experience-title').textContent = "Deneyimler";
        document.querySelector('.experience-subtitle').textContent = "Mesleki yolculuğuma dair kısa bir özet";

        document.querySelector('.experience-title').textContent = "Deneyimler";
        document.querySelector('.experience-subtitle').textContent = "Mesleki yolculuğuma dair kısa bir özet";

        // İlk iş deneyimi
        document.querySelectorAll('.timeline-item')[0].querySelector('.job-header h3').textContent = "Mobil Geliştirici (Flutter) & Backend Geliştirici (Node.js)";
        document.querySelectorAll('.timeline-item')[0].querySelector('.job-header h4').textContent = "zero2hero - Londra/Birleşik Krallık";
        document.querySelectorAll('.timeline-item')[0].querySelector('.timeline-content p').textContent = "Londra merkezli bu projede kısa sürede kendi becerilerimi göstererek 5 ay gibi kısa bir sürede mobil uygulamanın geliştirilmesinden sorumlu tek kişi olmayı başardım. Takım çalışmasını ve IT dünyasını bu projeyle yakından tanıdım ve tecrübe kazandım. Geliştirdiğim mobil uygulama hem Play Store hem App Store da yayınlanmış durumda.";
        document.querySelectorAll('.timeline-item')[0].querySelector('.timeline-date').textContent = "Ocak 2022- Günümüz";
        document.querySelectorAll('.timeline-item')[0].querySelector('.btn-small').textContent = "Daha Fazla Bilgi";
        document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[0].textContent = "Projenin mobil uygulamasının geliştirilmesi (Flutter)";
        document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[1].textContent = "Geliştirilen uygulamanın yayınlanması";
        document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[2].textContent = "FLUTTER -> Firebase Auth, Bloc Pattern, getIt, backend services";
        document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[3].textContent = "Backend tarafında endpoint geliştirilmesi (Node.JS)";

        // İkinci iş deneyimi
        document.querySelectorAll('.timeline-item')[1].querySelector('.job-header h3').textContent = "Uzun Dönem Stajyer";
        document.querySelectorAll('.timeline-item')[1].querySelector('.job-header h4').textContent = "Anadolubank A.Ş.- İstanbul/Türkiye";
        document.querySelectorAll('.timeline-item')[1].querySelector('.timeline-content p').textContent = "Uzun dönem stajımı kurumsal bir bankacılık şirketi olan ANADOLUBANK A.Ş’de tamamladım, bu dönemde BT dünyasındaki çalışmalara yakından tanık oldum, benden istenen backend projesini Python Flask ile tamamladım, aynı zamanda yapay zeka uygulamaları da bu projenin bir parçası oldu.";
        document.querySelectorAll('.timeline-item')[1].querySelector('.timeline-date').textContent = "Şubat 2024- Temmuz 2024";
        document.querySelectorAll('.timeline-item')[1].querySelector('.btn-small').textContent = "Daha Fazla Bilgi";
        document.querySelectorAll('.timeline-item')[1].querySelectorAll('li')[0].textContent = "RESTAPI çalışmaları (Python - flask)";
        document.querySelectorAll('.timeline-item')[1].querySelectorAll('li')[1].textContent = "Yapay zeka çalışmaları (Python)";
        document.querySelectorAll('.timeline-item')[1].querySelectorAll('li')[2].textContent = "Mobil Uygulama geliştirme (KOTLIN)";
        
        // Üçüncü iş deneyimi
        document.querySelectorAll('.timeline-item')[2].querySelector('.job-header h3').textContent = "Stajyer";
        document.querySelectorAll('.timeline-item')[2].querySelector('.job-header h4').textContent = "Oasis Software Tech.- Londra/Birleşik Krallık";
        document.querySelectorAll('.timeline-item')[2].querySelector('.timeline-content p').textContent = "Kısa dönem stajımı tamamladığım bu şirkette testerlık yaparak IT dünyasını tanımaya çalıştım.";
        document.querySelectorAll('.timeline-item')[2].querySelector('.timeline-date').textContent = "Temmuz 2022- Eylül 2022";
        document.querySelectorAll('.timeline-item')[2].querySelector('.btn-small').textContent = "Daha Fazla Bilgi";
        document.querySelectorAll('.timeline-item')[2].querySelectorAll('li')[0].textContent = "Projenin backend testlerinin yapılması (Postman)";
        document.querySelectorAll('.timeline-item')[2].querySelectorAll('li')[1].textContent = "Projenin front-end testlerinin yapılması (Cypress)";
        document.querySelectorAll('.timeline-item')[2].querySelectorAll('li')[2].textContent = "Mobil uygulama için tasarlanan sayfaları geliştirilmesi (Flutter)";

       // Projeler kısmı
       document.querySelector('#projects h2').textContent = "Projelerim";

        // İlk proje
        document.querySelectorAll('.project-item')[0].querySelector('h3').textContent = "zero2hero Mobil Uygulama";
        document.querySelectorAll('.project-item')[0].querySelector('p').textContent = "Çalıştığım projedeki istenilen mobil uygulama Figma tasarımından birebir olarak geliştirilip tamamlandı. RestApi kullanılan projede Bloc pattern ve getIt kullanılarak backend ilişkisi ve state managment kısımları sağlandı. Uygulama Play Store ve App Store da yayınlandı";
        document.querySelectorAll('.project-item')[0].querySelectorAll('.btn-small')[0].textContent = "Detaylar";

        // İkinci proje
        document.querySelectorAll('.project-item')[1].querySelector('h3').textContent = "Arty Mates";
        document.querySelectorAll('.project-item')[1].querySelector('p').textContent = "Bitirme projem olan ve kullanıcıların hobileri ile ilgili bir sosyal medya uygulaması olan bu uygulamada graphQL bir backend geliştirdim. Apollo server kullandığım bu uygulamada database olarak ise graph databaselerin öncülerinden neo4j ile çok ilişkili bir yapı kurararak deneyim kazandım.";
        document.querySelectorAll('.project-item')[1].querySelectorAll('.btn-small')[0].textContent = "Detaylar";
        document.querySelectorAll('.project-item')[1].querySelectorAll('.btn-small')[1].textContent = "GitHub";

        // Üçüncü proje
        document.querySelectorAll('.project-item')[2].querySelector('h3').textContent = "Investit Beta";
        document.querySelectorAll('.project-item')[2].querySelector('p').textContent = "Geliştirmekte olduğum kripto portföyü mobil uygulamasının beta sürümü hazır ve Play Store'da Android telefonlariçin indirilebilir durumdadır. Bu uygulamada API'siz bir çalışma yaparak kullanıcıların sadece satış hedef fiyatlarını hesaplayabileceği bir mobil uygulama geliştirdim.";
        document.querySelectorAll('.project-item')[2].querySelectorAll('.btn-small')[0].textContent = "Detaylar";
        document.querySelectorAll('.project-item')[2].querySelectorAll('.btn-small')[1].textContent = "GitHub";

         // Dördüncü proje
        document.querySelectorAll('.project-item')[3].querySelector('h3').textContent = "LifeBall";
        document.querySelectorAll('.project-item')[3].querySelector('p').textContent = "Mobil Uygulama dersi kapsamında geliştirdiğim ve apk dosyası olarak aktif olarak androidde çalıştırılabilen bir sosyal halısaha mobil uygulaması. Firebase cloud database kullandığım bu uygulamada Firebase Auth gibi özellikler de mevcuttur.";
        document.querySelectorAll('.project-item')[3].querySelectorAll('.btn-small')[0].textContent = "Details";
     

        // Yetenekler kısmı
        document.querySelector('.skills-title').textContent = "Yeteneklerim";
        document.querySelector('.skills-subtitle').textContent = "Uzmanlık Alanlarım";

        // İlk yetenek: Python
        document.querySelectorAll('.skill-card')[0].querySelector('h3').textContent = "Python";
        document.querySelectorAll('.skill-card')[0].querySelector('p').textContent = "Backend Geliştirme, Yapay zeka ve Görüntü işleme çalışmaları";
        document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[0].textContent = "Flask";
        document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[1].textContent = "OpenCV";
        document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[2].textContent = "Scikit";
        document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[3].textContent = "TensorFlow";

        // İkinci yetenek: Flutter
        document.querySelectorAll('.skill-card')[1].querySelector('h3').textContent = "Flutter";
        document.querySelectorAll('.skill-card')[1].querySelector('p').textContent = "Mobil Geliştirme";
        document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[0].textContent = "BLoC Pattern";
        document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[1].textContent = "Firebase Auth";
        document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[2].textContent = "Local Databases";
        document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[3].textContent = "Native Code";

        // Üçüncü yetenek: REST API
        document.querySelectorAll('.skill-card')[2].querySelector('h3').textContent = "RESTAPI - (Node.js, Python)";
        document.querySelectorAll('.skill-card')[2].querySelector('p').textContent = "RESTful API Çalışmaları";
        document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[0].textContent = "Firebase Auth";
        document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[1].textContent = "JWT authentication";
        document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[2].textContent = "SQL Database (mySQL)";
        document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[3].textContent = "noSQL Database (MongoDB)";
        document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[4].textContent = "Graph Database (neo4j)";

        // Dördüncü yetenek: GraphQL API
        document.querySelectorAll('.skill-card')[3].querySelector('h3').textContent = "graphQL API";
        document.querySelectorAll('.skill-card')[3].querySelector('p').textContent = "graphQL API geliştirme";
        document.querySelectorAll('.skill-card')[3].querySelectorAll('li')[0].textContent = "Apollo Server";
        document.querySelectorAll('.skill-card')[3].querySelectorAll('li')[1].textContent = "Queries and Mutations";

        // Beşinci yetenek: Docker Uygulamaları
        document.querySelectorAll('.skill-card')[4].querySelector('h3').textContent = "Docker Uygulamaları";
        document.querySelectorAll('.skill-card')[4].querySelector('p').textContent = "Docker kullanarak uygulamalar geliştirme";
        document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[0].textContent = "Docker Compose";
        document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[1].textContent = "dockerize işlemleri";
        document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[2].textContent = "volumes işlemleri";
        document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[3].textContent = "network işlemleri";
         // Contact Section
        document.querySelector('#contact h2').textContent = "İletişim";
        document.querySelector('#contact p').textContent = "Benimle iletişime geçmek isterseniz, e-posta gönderebilir veya sosyal medya hesaplarım üzerinden ulaşabilirsiniz.";
        // Footer kısmı Türkçe
        document.querySelector('.footer-copyright').textContent = "© 2024 Mirac Altınay. Tüm hakları saklıdır.";
        document.querySelector('.footer-update').textContent = "Son güncelleme tarihi 27.07.2024";

  
    } else {
        document.querySelector('.hero-content h1').textContent = "Hello, I am Mirac Altınay!";
            document.querySelector('.hero-content p').textContent = "Software Engineer";
            document.querySelector('a[href="#experience"]').textContent = "View My Work";
            document.querySelector('.experience-title').textContent = "Experiences";
            document.querySelector('.experience-subtitle').textContent = "A brief overview of my professional journey";
            document.querySelector('#projects h2').textContent = "My Projects";
            document.querySelector('.skills-title').textContent = "My Skills";
            document.querySelector('.skills-subtitle').textContent = "My Areas of Expertise";
            document.querySelector('#contact h2').textContent = "Contact Me";
            document.querySelector('#contact p').textContent = "If you'd like to get in touch, feel free to reach out via email or connect with me on social media.";
      
            // Navigation
            document.querySelector('a[href="#hero"]').textContent = "About Me";
            document.querySelector('a[href="#experience"]').textContent = "Experiences";
            document.querySelector('a[href="#projects"]').textContent = "Projects";
            document.querySelector('a[href="#contact"]').textContent = "Contact";

            // Hero Section
            document.querySelector('.hero-content h1').textContent = "Hello, I am Mirac Altınay!";
            document.querySelector('.hero-content p').textContent = "Software Engineer";
            document.querySelector('.btn').textContent = "View My Work";

            // About Section
            document.querySelector('.hero-about p').textContent = "Although my full name is Abdulmiraç, I prefer to go by Mirac. I graduated from Selçuk University with a degree in Computer Engineering, and since January 2022, I have been actively working on the London-based zero2hero project. My career has focused on software development and mobile app development. The zero2hero project, in particular, has provided me with valuable experiences in teamwork and professional life. During this time, I took on key responsibilities such as the development and maintenance of the project's mobile app. I also played an active role in technical areas such as developing backend endpoints. At the beginning of my career, I gained important experience by doing a short-term internship at another London-based company, Oasis Software Tech. Some of the projects I developed independently, both in the backend and mobile fields, include my graduation project, the Arty Mates app, the Investit Beta crypto portfolio mobile app, and the LifeBall social soccer app. Through these projects, I gained expertise in technologies such as ExpressJS, MongoDB, Neo4j, Docker Compose, RESTful API, Flutter, and Firebase Auth. In my professional life, I continuously focus on developing my teamwork and communication skills to bring innovative solutions to projects. My goal is to keep improving myself in mobile app development and backend technologies and implement the best practices in these fields. I would also like to mention that I have a good command of English. For references and more detailed information, please feel free to check out my LinkedIn profile and GitHub account.";

            // İş Deneyimleri İngilizce
            document.querySelector('.experience-title').textContent = "Experiences";
            document.querySelector('.experience-subtitle').textContent = "A brief overview of my professional journey";

            // İlk iş deneyimi
            document.querySelectorAll('.timeline-item')[0].querySelector('.job-header h3').textContent = "Mobile Developer (Flutter) & Backend Developer (Node.js)";
            document.querySelectorAll('.timeline-item')[0].querySelector('.job-header h4').textContent = "zero2hero - London/UK";
            document.querySelectorAll('.timeline-item')[0].querySelector('.timeline-content p').textContent = "In this London-based project, I quickly demonstrated my skills and managed to become the sole person responsible for the development of the mobile application within a short period of 5 months; through this project, I gained a deep understanding and experience in teamwork and the IT world, and the mobile application I developed is now published on both the Play Store and the App Store.";
            document.querySelectorAll('.timeline-item')[0].querySelector('.timeline-date').textContent = "January 2022- Present";
            document.querySelectorAll('.timeline-item')[0].querySelector('.btn-small').textContent = "Learn More";
            document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[0].textContent = "Development of the mobile application (Flutter)";
            document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[1].textContent = "Application publishing";
            document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[2].textContent = "FLUTTER -> Firebase Auth, Bloc Pattern, getIt, backend services";
            document.querySelectorAll('.timeline-item')[0].querySelectorAll('li')[3].textContent = "Development of backend endpoints (Node.JS)";

            // İkinci iş deneyimi
            document.querySelectorAll('.timeline-item')[1].querySelector('.job-header h3').textContent = "Long-term Intern";
            document.querySelectorAll('.timeline-item')[1].querySelector('.job-header h4').textContent = "Anadolubank A.Ş.- Istanbul/Turkey";
            document.querySelectorAll('.timeline-item')[1].querySelector('.timeline-content p').textContent = "I completed my long-term internship at ANADOLUBANK A.Ş., a corporate banking company, where I closely observed the work being done in the IT world; I completed the requested backend project using Python Flask, and AI applications also became a part of this project.";
            document.querySelectorAll('.timeline-item')[1].querySelector('.timeline-date').textContent = "February 2024- July 2024";
            document.querySelectorAll('.timeline-item')[1].querySelector('.btn-small').textContent = "Learn More";
            document.querySelectorAll('.timeline-item')[1].querySelectorAll('li')[0].textContent = "RESTAPI development (Python - flask)";
            document.querySelectorAll('.timeline-item')[1].querySelectorAll('li')[1].textContent = "Artificial intelligence development (Python)";
            document.querySelectorAll('.timeline-item')[1].querySelectorAll('li')[2].textContent = "Mobile Application Development (KOTLIN)";
                       
           // Üçüncü iş deneyimi
           document.querySelectorAll('.timeline-item')[2].querySelector('.job-header h3').textContent = "Intern";
            document.querySelectorAll('.timeline-item')[2].querySelector('.job-header h4').textContent = "Oasis Software Tech.- London/UK";
            document.querySelectorAll('.timeline-item')[2].querySelector('.timeline-content p').textContent = "During my short-term internship at this company, I worked as a tester and learned about the IT world.";
            document.querySelectorAll('.timeline-item')[2].querySelector('.timeline-date').textContent = "July 2022- September 2022";
            document.querySelectorAll('.timeline-item')[2].querySelector('.btn-small').textContent = "Learn More";
            document.querySelectorAll('.timeline-item')[2].querySelectorAll('li')[0].textContent = "Backend testing using Postman";
            document.querySelectorAll('.timeline-item')[2].querySelectorAll('li')[1].textContent = "Front-end testing using Cypress";
            document.querySelectorAll('.timeline-item')[2].querySelectorAll('li')[2].textContent = "Developing pages designed for mobile applications (Flutter)";
       
            document.querySelector('#projects h2').textContent = "My Projects";

            // İlk proje
            document.querySelectorAll('.project-item')[0].querySelector('h3').textContent = "zero2hero Mobile Application";
            document.querySelectorAll('.project-item')[0].querySelector('p').textContent = "The requested mobile application in the project I worked on was developed and completed exactly according to the Figma design. In the project, which used RestApi, the backend integration and state management were handled using Bloc pattern and getIt. The application has been published on both the Play Store and the App Store.";
            document.querySelectorAll('.project-item')[0].querySelectorAll('.btn-small')[0].textContent = "Details";

            // İkinci proje
            document.querySelectorAll('.project-item')[1].querySelector('h3').textContent = "Arty Mates";
            document.querySelectorAll('.project-item')[1].querySelector('p').textContent = "In this application, which was my graduation project and a social media app focused on users' hobbies, I developed a GraphQL backend. Using Apollo Server in this project, I gained experience by establishing a highly relational structure with Neo4j, one of the pioneers of graph databases.";
            document.querySelectorAll('.project-item')[1].querySelectorAll('.btn-small')[0].textContent = "Details";
            document.querySelectorAll('.project-item')[1].querySelectorAll('.btn-small')[1].textContent = "GitHub";

            // Üçüncü proje
            document.querySelectorAll('.project-item')[2].querySelector('h3').textContent = "Investit Beta";
            document.querySelectorAll('.project-item')[2].querySelector('p').textContent = "The beta version of the crypto portfolio mobile application I am developing is ready and available for download on the Play Store for Android phones. In this application, I developed a mobile app without using an API, allowing users to only calculate their sell target prices.";
            document.querySelectorAll('.project-item')[2].querySelectorAll('.btn-small')[0].textContent = "Details";

             // Dördüncü proje
            document.querySelectorAll('.project-item')[3].querySelector('h3').textContent = "LifeBall";
            document.querySelectorAll('.project-item')[3].querySelector('p').textContent = "As part of the Mobile Application course, I developed a social soccer mobile application that can be actively run on Android as an APK file. In this application, I used Firebase Cloud Database, and it also includes features such as Firebase Auth.";
            document.querySelectorAll('.project-item')[3].querySelectorAll('.btn-small')[0].textContent = "Details";

            // Yetenekler kısmı İngilizce
            document.querySelector('.skills-title').textContent = "My Skills";
            document.querySelector('.skills-subtitle').textContent = "My Areas of Expertise";

            // İlk yetenek: Python
            document.querySelectorAll('.skill-card')[0].querySelector('h3').textContent = "Python";
            document.querySelectorAll('.skill-card')[0].querySelector('p').textContent = "Backend Development, Artificial Intelligence, and Image Processing";
            document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[0].textContent = "Flask";
            document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[1].textContent = "OpenCV";
            document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[2].textContent = "Scikit";
            document.querySelectorAll('.skill-card')[0].querySelectorAll('li')[3].textContent = "TensorFlow";

            // İkinci yetenek: Flutter
            document.querySelectorAll('.skill-card')[1].querySelector('h3').textContent = "Flutter";
            document.querySelectorAll('.skill-card')[1].querySelector('p').textContent = "Mobile Development";
            document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[0].textContent = "BLoC Pattern";
            document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[1].textContent = "Firebase Auth";
            document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[2].textContent = "Local Databases";
            document.querySelectorAll('.skill-card')[1].querySelectorAll('li')[3].textContent = "Native Code";

            // Üçüncü yetenek: REST API
            document.querySelectorAll('.skill-card')[2].querySelector('h3').textContent = "RESTAPI - (Node.js, Python)";
            document.querySelectorAll('.skill-card')[2].querySelector('p').textContent = "RESTful API Development";
            document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[0].textContent = "Firebase Auth";
            document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[1].textContent = "JWT authentication";
            document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[2].textContent = "SQL Database (mySQL)";
            document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[3].textContent = "noSQL Database (MongoDB)";
            document.querySelectorAll('.skill-card')[2].querySelectorAll('li')[4].textContent = "Graph Database (neo4j)";

            // Dördüncü yetenek: GraphQL API
            document.querySelectorAll('.skill-card')[3].querySelector('h3').textContent = "graphQL API";
            document.querySelectorAll('.skill-card')[3].querySelector('p').textContent = "graphQL API Development";
            document.querySelectorAll('.skill-card')[3].querySelectorAll('li')[0].textContent = "Apollo Server";
            document.querySelectorAll('.skill-card')[3].querySelectorAll('li')[1].textContent = "Queries and Mutations";

            // Beşinci yetenek: Docker Applications
            document.querySelectorAll('.skill-card')[4].querySelector('h3').textContent = "Docker Applications";
            document.querySelectorAll('.skill-card')[4].querySelector('p').textContent = "Developing applications using Docker";
            document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[0].textContent = "Docker Compose";
            document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[1].textContent = "dockerize operations";
            document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[2].textContent = "volume operations";
            document.querySelectorAll('.skill-card')[4].querySelectorAll('li')[3].textContent = "network operations";
       
            // Contact Section
            document.querySelector('#contact h2').textContent = "Contact Me";
            document.querySelector('#contact p').textContent = "If you'd like to get in touch, feel free to reach out via email or connect with me on social media.";
            // Footer kısmı İngilizce
            document.querySelector('.footer-copyright').textContent = "© 2024 Mirac Altınay. All rights reserved.";
            document.querySelector('.footer-update').textContent = "Last updated on 27.07.2024";
            document.querySelectorAl

    }
}

document.addEventListener('DOMContentLoaded', function() {
    setLanguage(userLang);
});

document.getElementById('lang-tr').addEventListener('click', function () {
    setLanguage('tr');
    document.querySelector('nav').classList.remove('active');
});

document.getElementById('lang-en').addEventListener('click', function () {
    setLanguage('en');
    document.querySelector('nav').classList.remove('active');
});
