angular.module('sidneyspe', [])
  .controller('SidneyspeController', function($scope, $http) {
    var vm = this;
    vm.search = "";
    vm.info = {
      name: "Sidney Pimentel",
      title: "System Analyst / Software Engineering",
      image: "profile.jpg"
    };

    vm.titles =
      {
        education : "EDUCATION",
        about: "ABOUT ME",
        experience: "EXPERIENCE",
        skills: "TECHNICAL SKILLS",
        cv: "Curriculum Vitae"
      };



    vm.linkedin = {
      name: "linkedin",
      url: "https://br.linkedin.com/in/sidney-pimentel-4ab52a82",
      icon: ""
    };
    vm.facebook = {
      name: "facebook",
      url: "https://facebook.com/sidneyspe1",
      icon: ""
    };
    vm.github = {
      name: "github",
      url: "https://github.com/sidneyspe",
      icon: ""
    };
    vm.mail = {
      name: "envelope",
      url: "mailto:sidneyspe@gmail.com",
      icon: ""
    };

    vm.cv = [{
        name: "cvPT_BR",
        url: "https://www.dropbox.com/s/ci12y46uk2rce2i/sidney-pimentel-cvPT_BR.pdf?dl=0",
        icon: "br flag"
      },
      {
        name: "cvEN_US",
        url: "https://www.dropbox.com/s/040520jhxba68kn/sidney-pimentel-cvEN_US.pdf?dl=0",
        icon: "us flag"
      }
    ]

    vm.experiences = [{
        title: "Systems Analyst with focus on Group management, usability and user experience",
        description: "Software Practices Laboratory (SPLab) - UFCG, 2016 - current."
      },
      {
        title: "Full stack web developer (C # - Webapplication / MVC 4-5 / LightBase)",
        description: "Light Infocon, 6 months (internship), 2015"
      },
      {
        title: "Expertise in Human Factors (Heuristic Assessment, Shadow and Usability Test) in medical device.",
        description: "Course of Engineering of Human Factors, 2014"
      },
      {
        title: "Experience in evaluating health-focused software / hardware heuristics",
        description: "Nucleus of Strategic Technologies in Health (NUTES), 2013-2015."
      },
      {
        title: "Experience in developing C # systems (Windows forms)",
        description: "HopeBus - Bus ticket management system"
      },
      {
        title: "Front-end developer (Java, JSP, Maven, Spring MVC, HTML5, CSS3, JavaScript)",
        description: "ECarona - Available carpool web system | LeCode - Responsive game, to aid in the learning of algorithms"
      },
      {
        title: "Development of a C ++ image processing tool, use an OpenCV, SVM, LBP library.",
        description: "Local Binary Patterns Applied to Breast Cancer Classification in Mammographies"
      }
    ];

    vm.labels = [
      "C/C++", "Java", "C#", "Python", "Groovy", "Grails", "Postgresql", "MySQL",
      "SQLite", "LightBase", "Apache", "Tomcat", "ASP NET MVC4", "Web API",
      "Android SDK", "JavaFX", "QT", "Hibernate", "Entity Framework", "HTML5",
      "CSS3", "JavaScript", "JQuery", "AngularJS", "Maven", "Spring MVC", "Gradle",
      "wkhtmltopdf", "LESS", "Semantic UI", "Bootstrap", "Bootflat", "Materialize",
      "Bulma", " Material Design Lite", "Git", "Gitlab", "Github", "Bitbucket",
      "Robot Framework(Web Interface Test)", "BDD"
    ];

  });
