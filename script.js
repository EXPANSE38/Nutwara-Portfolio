/**
 * Nutwara's Portfolio — client-side interactions.
 * Data-driven project and activity modals, navigation, and UI helpers.
 */
(function () {
    'use strict';

    var BP_TABLET = 1024;

    /* —— DOM references —— */
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    var navBackdrop = document.getElementById('navBackdrop');
    var projectModal = document.getElementById('projectModalOverlay');
    var projectModalClose = document.getElementById('projectModalClose');
    var activityModal = document.getElementById('awardProofOverlay');
    var activityModalClose = document.getElementById('awardProofClose');
    var proofImageContainer = document.querySelector('.proof-image');

    /* —— Content data —— */
    var projectData = {
        'Binova - Smart Recycling Bin': {
            title: 'Smart Bottle Trash Sorter',
            subtitle: 'An Iot-enabled smart recycling system that automatically identifies and sorts plastic bottles and metal cans while encouraging recycling behavior through a reward point system. Selected by Thailands National Research Council (สถาบันวิจัยแห่งชาติ) to presented at the China (Shanghai) International Invention & Innovation Expo 2026.',
            images: [
                'images/innovation_1.png',
                'images/innovation_2.jpg',
                'images/innovation_3.jpg',
                'images/innovation_4.jpg',
                'images/innovation_5.jpg',
                'images/innovation_6.png',
                'images/innovation_7.png',
                'images/innovation_8.png'
            ],
            problem: 'Plastic waste is one of the growing environmental challenges in Thailand. Even when recycling bins are available, recyclable materials are often mixed with general waste because of incorrect sorting, lack of awareness, or convenience. This reduces recycling efficiency, increases landfill waste, and creates additional workload for waste management staff.',
            idea: 'Our team developed the Smart Bottle Trash Sorter to make recycling easier, smarter, and more engaging. The project automatically separates recyclable materials, reduces human error, improves recycling efficiency, and motivates users through a reward point system.',
            steps: [
                { label: 'System Initialization', description: 'The machine connects to WiFi and calibrates the motor automatically.' },
                { label: 'User Identification', description: 'Users enter their student ID through the keypad to access the reward point system.' },
                { label: 'Waste Detection', description: 'Sensors detect whether the item is a plastic bottle or a metal can.' },
                { label: 'Automatic Sorting', description: 'The motor rotates and directs the waste into the correct compartment.' },
                { label: 'Data Recording', description: 'The system records user data and recycling activity through Google Sheets for point accumulation and monitoring. ' }
            ],
            recognition: [
                'Selected by NRCT Thailand (วช.)',
                'Shanghai Invention Expo 2026'
            ],
            technologies: ['Sensors', 'Motor Control', 'IoT Systems', 'Google Sheets API'],
            timeline: ['6 Months'],
            team: '3 Students Team Supported by Innovation Mentors',
            learnings: [
                'Technology can influence human behavior.',
                'Solving environmental problems requires both engineering and user motivation.',
                'Building real-world systems involves testing, iteration, and teamwork.',
                'Data and automation can make sustainability more practical and measurable.'
            ],
            improvements: [
                'AI-powered waste recognition',
                'Mobile application integration',
                'School database connectivity',
                'Community and public-area deployment',
                'Expanded recycling analytics and reporting'
            ]
        },
        'Roblox Studio - English Classroom': {
            title: 'Roblox Studio - English Classroom',
            subtitle: 'An interactive 3D digital memory of our classroom environment built in Roblox Studio for immersive learning.',
            images: [
                'images/roblox_1.png',
                'images/roblox_2.png',
                'images/roblox_3.png',
                'images/roblox_4.png',
                'images/roblox_5.png',
                'images/roblox_6.png',
                'images/roblox_7.png'
            ],
            description: 'A recreational visualization of The Prince Royals College EEP (Excellence English Program) classroom possible inside Roblox. The goal was to capture the feeling of the room where we spend time learning, talking, and sharing moments together. Every detail was built by hand to match the real classroom layout, from the desks and board to the atmosphere of the room itself.',
            idea: 'This project started with a small idea with my friend best friend Heng, we wanting to do something that we can look back when we get older to bring back old memories. So we decided to make a place where players could explore, interact, and hangout.',
            steps: [
                { label: 'Design Phase', description: '[Describe how you planned the classroom layout]' },
                { label: 'Build Phase', description: '[Describe how you constructed the elements in Roblox Studio]' },
                { label: 'Scripting', description: '[Describe any scripts or interactive features]' },
                { label: 'Testing', description: '[Describe how you tested and refined the design]' }
            ],
            recognition: '92 % Rating - 284 People Visited',
            technologies: ['Roblox Studio', 'Lua (Basic Scripting)', '3D Environment Design'],
            timeline: [
                { label: 'Planning', duration: 'Day 1' },
                { label: 'Sketch & Design', duration: 'Day 2' },
                { label: 'Perfecting Details', duration: 'Day 3' },
                { label: 'Scripting & Testing', duration: 'Day 4' }
            ],
            timelineTotal: '4 Days',
            team: "Idea - Script And Model Design | Heng - Model Design And Visual Details",
            learnings: ['How friendship and teamwork can make a project happen.',
                'The Basics of scripting in Roblox Studio',
                'Architecture',
                'Using pictures to create a high detail in 3d build.'],
            improvements: ['Polishing details', 'Expanding to the M.3 building']
        },
        'Atmos Data Chaingmai (AQI & PM2.5 Air Pollution)': {
            title: 'Atmos Data Chaingmai (AQI & PM2.5 Air Pollution)',
            subtitle: 'A live district dashboard showing air quality and pollution trends for Chiang Mai.',
            link: 'https://expanse38.github.io/AtmosData-Chiang-Mai/',
            images: [
                'images/atmos_data_1.png',
                'images/atmos_data_2.png',
                'images/atmos_data_3.png',
                'images/atmos_data_4.png',
                'images/atmos_data_5.png',
                'images/atmos_data_6.png',
                'images/atmos_data_7.png'
            ],
            problem: 'In Chiang Mai, PM2.5 air pollution is a major issue that affects students and local communities every year. Many people do not have quick and easy access to real-time air quality information, making it difficult to know when it is safe to go outside for school activities, sports, or everyday tasks.',
            idea: 'AtmosData Chiang Mai is a web application designed to help people make safer decisions about outdoor activities. It provides real-time PM2.5 and AQI data, historical air quality trends, interactive maps, and alert notifications across Chiang Mai province. By bringing all of this information together in one place, AtmosData makes air quality data easier to understand and more accessible for students and the community.',
            steps: [
                { label: 'Collect', description: 'Sensors gather PM2.5 and AQI readings in real time.' },
                { label: 'Analyze', description: 'Data is processed to identify pollution spikes and trends.' },
                { label: 'Display', description: 'Maps and charts present information in an easy-to-read format.' }
            ],
            recognition: 'Built as a Personal Learning Project, Independently Developed',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'Chart.js'],
            timeline: [
                { label: 'Programming Foundations', duration: '4 Months' },
                { label: 'Web Development Training', duration: '3 Months' },
                { label: 'Environmental Data Research', duration: '2 Weeks' },
                { label: 'Front-End Development', duration: '4 Weeks' },
                { label: 'Data Integration', duration: '2 Weeks' },
                { label: 'Dashboard Design', duration: '3 Weeks' }
            ],
            timelineTotal: '7 Months + 11 Weeks',
            team: [
                'Personal Project',
                'Mentored Web Development Learning Project'
            ],
            journey: [
                'This project was developed as part of my journey in learning web development and programming.',
                'Before building AtmosData, I studied programming fundamentals, website development, data visualization, and front-end technologies under the guidance of my mentor.',
                'AtmosData became the first large-scale software project where I applied these skills to solve a real-world environmental problem.'
            ],
            resultA: 'Real Time',
            resultAText: 'Air Quality Index Monitoring',
            resultB: 'PM2.5',
            resultBText: 'Interactive Air Quality Map',
            learnings: [
                'How environmental data can be transformed into meaningful insights.',
                'The importance of user-centered dashboard design.',
                'How APIs, maps, and data visualization work together in modern web applications.',
                'Real-world software development requires continuous testing, debugging, and iteration.'
            ],
            improvements: [
                'Predict dust values ​​6–12 hours in advance with Machine Learning.',
                'Safe Time Planner to suggest ideal times for outdoor activities.',
                'Notification via LINE Notify / Telegram',
                'Supports data from many provinces',
                'Compare annual data and analyze trends.'
            ]
        },
        'My Portfolio Website': {
            title: 'My Portfolio Website',
            subtitle: 'A personal website I built to showcase my projects, achievements, and goals. The site you are viewing now.',
            description: 'This portfolio is a personal website I built to showcase my projects, achievements, and goals. It uses HTML, CSS, and JavaScript, with AI-assisted development to help generate code, troubleshoot issues, and improve the overall structure. Throughout the process, I customized the design, organized the content, refined the user experience, and continuously improved the site through testing and iteration.',
            idea: 'I wanted a place where I could showcase my projects, achievements, and goals in a way that could grow with me over time. This website was built through a process of my own work and AI-assisted development. AI helped me generate ideas, improve code, fix bugs, and explore different design approaches, while I made the code and decided the site\'s structure, content, features, and overall direction. Through the process, I learned not only web development, but also how to effectively use AI as a tool for problem-solving and creation.',
            ideaLabel: 'My Contribution',
            stepsLabel: 'Development Process',
            steps: [
                {
                    label: 'Content Planning',
                    items: ['Project organization', 'Portfolio structure', 'User experience planning']
                },
                {
                    label: 'Website Development',
                    items: ['Layout design', 'Responsive interface', 'Interactive components']
                },
                {
                    label: 'AI-Assisted Development',
                    items: ['Code refinement', 'Troubleshooting support', 'Design improvements']
                },
                {
                    label: 'Testing & Optimization',
                    items: ['Mobile compatibility', 'Performance improvements', 'Navigation refinement']
                }
            ],
            images: [
                'images/website_code_1.png',
                'images/website_code_2.png',
                'images/website_code_3.png',
                'images/website_code_4.png',
                'images/website_code_5.png',
                'images/website_code_6.png'
            ],
            recognition: 'Personal Learning Project - My Own Website',
            technologies: [
                'HTML',
                'CSS',
                'Javascript',
                'Github',
                'Responsive Design'
            ],
            timeline: [
                { label: 'Planning & Structure', duration: '1 Week' },
                { label: 'UI Design', duration: '1 Week' },
                { label: 'Front-End Development', duration: '2 Weeks' },
                { label: 'Content Integration', duration: '1 Week' },
                { label: 'Testing & Refinement', duration: '1 Week' }
            ],
            timelineTotal: '6 Weeks',
            team: 'Personal Project that I designed, built, and maintained.',
            learnings: [
                'Working with HTML, CSS, and JavaScript',
                'Responsive design for mobile devices',
                'Organizing larger codebases',
                'Debugging and fixing layout issues',
                'Using AI effectively as a development tool'
            ],
            improvements: [
                'Add dedicated portfolio screenshots for each section',
                'Deploy to GitHub Pages with a custom domain',
                'Add dark mode toggle',
                'Optimize images and lazy-loading for faster load times',
                'Add basic accessibility audit and keyboard focus improvements'
            ]
        },
        'Minecraft Survival Multiplayer Server': {
            title: 'Minecraft Survival Multiplayer Server',
            subtitle: 'A self-hosted dedicated server I built so friends could join a shared survival world, and my first hands-on project in server setup, configuration, and networking.',
            images: [
                'images/minecraft_1.jpg',
                'images/minecraft_2.png',
                'images/minecraft_3.png',
                'images/minecraft_4.jpg'
            ],
            idea: 'I decided to create my own dedicated Minecraft survival server. The goal was to make something that matters as a community, make memories. and learn how a real multiplayer server works. From installation and configuration to making the server accessible for friends online.',
            steps: [
                { label: 'Server Setup', description: 'Installed and configured a dedicated Minecraft server on my own machine.' },
                { label: 'Configuration', description: 'Adjusted server settings, world options, and permissions for multiplayer survival gameplay.' },
                { label: 'Port Forwarding', description: 'Worked through networking setup so friends outside my home network could connect.' },
                { label: 'Testing & Launch', description: 'Tested connections, fixed issues, and launched the server for friends to join.' }
            ],
            recognition: '5+ daily players, 20+ visited',
            technologies: ['Minecraft', 'Dedicated Server', 'Server & Plugin Configuration', 'Port Forwarding'],
            timeline: [
                { label: 'Research', duration: '1 Day' },
                { label: 'Setup & Configuration', duration: '2 Days' },
                { label: 'Port Forwarding & Testing', duration: '2 Days' }
            ],
            timelineTotal: '5 Days',
            team: 'Personal Project - built and managed by myself',
            learnings: [
                'Setting up a server taught me that coding projects often involve troubleshooting outside the code itself.',
                'Port forwarding was the hardest part, but solving it built my patience and problem-solving skills.',
                'Building something my friends could actually use made the project feel meaningful and motivating.'
            ]
        }
    };

    var activityData = {
        'FTC Volunteer Staff': {
            title: 'FIRST TECH CHALLENGE - Volunteer Staff',
            description: 'Participated in the FIRST Tech Challenge as a volunteer staff member, supporting teams and learning how large STEM competitions are organized.',
            image: 'images/ftccertificate.jpg'
        },
        'Digital Cobot Camp': {
            title: 'Digital Cobot Camp - วิทยาลัยนานาชาตินวัตกรรมดิจิทัล มหาวิทยาลัยเชียงใหม่',
            description: 'Programming AGV robots to solve tasks and complete missions at Chiang Mai University Digital International College.',
            image: 'images/robotcertificate.jpg'
        },
        'HKICO Python Exam': {
            title: 'HKICO Python Exam',
            description: 'Participated in the Hong Kong International Computational Olympiad, applying Python and algorithmic thinking.',
            image: 'images/hkicocertificate.jpg'
        },
        'English Language Olympiad': {
            title: 'English Language Olympiad',
            description: 'KGL Contest in English 2025 — Stage 1. Achieved 90% overall at Level A2 and qualified for Stage 2 of the KGL English Olympiad.',
            image: 'images/kglcertificate.jpg'
        },
        'Pre-Python Programming Course': {
            title: 'Pre-Python Programming Course',
            description: 'Learning basic Python by solving mathematical situations with deep thinking — understanding logic and variables.',
            image: 'images/pythoncertificate.jpg'
        },
        'AI For Everyone': {
            title: 'AI For Everyone - "Writing is not magic, It\'s design"',
            description: 'Understanding AI concepts, function and array formulas, and pivot table reports. #DataRockie #ModernFightClub',
            image: 'images/bootcamp_2.jpg'
        },
        'Student Council': {
            title: 'Student Council',
            description: 'Participated in the student council election process in the name "Radiant69" as a male assistant in the council, contributing ideas for improving the school community.',
            image: 'images/council.jpg'
        },
        'Good Scout Program': {
            title: 'ลูกเสือ กุสตาฟ - Gustav Scout Program',
            description: "Scout leadership and membership at The Prince Royal's College - outdoor education and service.",
            image: 'images/gustavcertificate.jpg'
        }
    };

    var currentImageIndex = 0;
    var currentProjectImages = [];
    var currentProjectTitle = '';

    function lockBodyScroll(locked) {
        document.body.style.overflow = locked ? 'hidden' : '';
    }

    function isImageFile(value) {
        return /\.(png|jpe?g|gif|webp|svg)$/i.test(value);
    }

    function isVideoFile(value) {
        return /\.(mp4|webm|ogg|mov)$/i.test(value);
    }

    function setText(id, value) {
        var el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function fillList(listId, items) {
        var list = document.getElementById(listId);
        if (!list) return;
        list.innerHTML = '';
        if (!items || !items.length) return;
        items.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }

    function fillTeam(team) {
        var container = document.getElementById('modalTeam');
        if (!container) return;
        container.innerHTML = '';

        if (Array.isArray(team)) {
            team.forEach(function (item) {
                var line = document.createElement('p');
                line.textContent = item;
                container.appendChild(line);
            });
            return;
        }

        container.textContent = team || '';
    }

    function fillJourney(journey) {
        var section = document.getElementById('modalJourneySection');
        var container = document.getElementById('modalJourneyText');
        if (!section || !container) return;

        if (!journey || !journey.length) {
            section.hidden = true;
            container.innerHTML = '';
            return;
        }

        section.hidden = false;
        container.innerHTML = '';
        journey.forEach(function (paragraph) {
            var p = document.createElement('p');
            p.textContent = paragraph;
            container.appendChild(p);
        });
    }

    function fillProjectLink(link, label, heading) {
        var card = document.getElementById('modalLinkCard');
        var anchor = document.getElementById('modalProjectLink');
        var title = card ? card.querySelector('h4') : null;
        if (!card || !anchor) return;

        if (!link) {
            card.hidden = true;
            anchor.removeAttribute('href');
            anchor.textContent = '';
            return;
        }

        card.hidden = false;
        if (title) title.textContent = heading || 'Live Project';
        anchor.href = link;
        anchor.textContent = label || link;
    }

    function renumberModalSections(data) {
        var sections = [];

        var section1Text = document.getElementById('modalSection1Text');
        var section1 = section1Text ? section1Text.closest('.modal-section') : null;
        if (section1 && !section1.hidden) {
            sections.push({
                el: section1,
                label: data.description ? 'Description' : 'The Problem'
            });
        }

        var ideaText = document.getElementById('modalSection2Text');
        var ideaSection = ideaText ? ideaText.closest('.modal-section') : null;
        if (ideaSection && !ideaSection.hidden) {
            sections.push({ el: ideaSection, label: data.ideaLabel || 'The Idea' });
        }

        var stepsContainer = document.getElementById('modalSteps');
        var stepsSection = stepsContainer ? stepsContainer.closest('.modal-section') : null;
        if (stepsSection && !stepsSection.hidden) {
            sections.push({ el: stepsSection, label: data.stepsLabel || 'How It Works' });
        }

        var journeySection = document.getElementById('modalJourneySection');
        if (journeySection && !journeySection.hidden) {
            sections.push({ el: journeySection, label: 'Development Journey' });
        }

        var learningsList = document.getElementById('modalLearnings');
        var learningsSection = learningsList ? learningsList.closest('.modal-section') : null;
        if (learningsSection && !learningsSection.hidden) {
            sections.push({ el: learningsSection, label: 'What I Learned' });
        }

        var improvementsList = document.getElementById('modalImprovements');
        var improvementsSection = improvementsList ? improvementsList.closest('.modal-section') : null;
        if (improvementsSection && !improvementsSection.hidden) {
            sections.push({ el: improvementsSection, label: 'Future Improvements' });
        }

        sections.forEach(function (section, index) {
            var h3 = section.el.querySelector('h3');
            if (h3) h3.textContent = (index + 1) + '. ' + section.label;
        });
    }

    function fillRecognition(recognition) {
        var container = document.getElementById('modalRecognition');
        if (!container) return;
        container.innerHTML = '';

        if (Array.isArray(recognition)) {
            var list = document.createElement('ul');
            list.className = 'recognition-list';
            recognition.forEach(function (item) {
                var li = document.createElement('li');
                if (/NRCT|วช\./i.test(item)) {
                    li.className = 'recognition-item--highlight';
                    li.innerHTML = '<i class="fa-solid fa-award recognition-icon" aria-hidden="true"></i>' + item;
                } else {
                    li.textContent = item;
                }
                list.appendChild(li);
            });
            container.appendChild(list);
            return;
        }

        container.textContent = recognition || '';
    }

    function fillTags(containerId, tags) {
        var container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        if (!tags || !tags.length) return;
        tags.forEach(function (tag) {
            var span = document.createElement('span');
            span.textContent = tag;
            container.appendChild(span);
        });
    }

    function fillSteps(steps) {
        var container = document.getElementById('modalSteps');
        if (!container) return;
        container.innerHTML = '';
        if (!steps || !steps.length) return;
        steps.forEach(function (step, index) {
            var item = document.createElement('div');
            item.className = 'step-item';
            if (step.items && step.items.length) {
                var list = document.createElement('ul');
                list.className = 'step-sublist';
                step.items.forEach(function (subitem) {
                    var li = document.createElement('li');
                    li.textContent = subitem;
                    list.appendChild(li);
                });
                item.innerHTML =
                    '<div class="step-number">' + (index + 1) + '</div>' +
                    '<div class="step-text"><h4>' + step.label + '</h4></div>';
                item.querySelector('.step-text').appendChild(list);
            } else {
                item.innerHTML =
                    '<div class="step-number">' + (index + 1) + '</div>' +
                    '<div class="step-text"><h4>' + step.label + '</h4><p>' + (step.description || '') + '</p></div>';
            }
            container.appendChild(item);
        });
    }

    function fillTimeline(items, total) {
        var container = document.getElementById('modalTimeline');
        if (!container) return;
        container.innerHTML = '';
        if (!items || !items.length) return;
        items.forEach(function (item) {
            if (typeof item === 'string') {
                var line = document.createElement('p');
                line.textContent = item;
                container.appendChild(line);
                return;
            }
            var block = document.createElement('div');
            block.className = 'modal-timeline-item';
            var phase = document.createElement('strong');
            phase.textContent = item.label;
            var duration = document.createElement('span');
            duration.textContent = item.duration;
            block.appendChild(phase);
            block.appendChild(duration);
            container.appendChild(block);
        });
        if (total) {
            var totalLine = document.createElement('p');
            totalLine.className = 'modal-timeline-total';
            totalLine.textContent = 'Total: ' + total;
            container.appendChild(totalLine);
        }
    }

    // —— Navigation ——
    function setNavOpen(isOpen) {
        if (!navbar || !navToggle) return;
        navbar.classList.toggle('nav-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('nav-menu-open', isOpen);
        if (navBackdrop) {
            navBackdrop.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        }
    }

    function closeNav() {
        setNavOpen(false);
    }

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            setNavOpen(!navbar.classList.contains('nav-open'));
        });
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeNav);
    }

    function handleWindowResize() {
        if (window.innerWidth > BP_TABLET) closeNav();
        updateNavbarScroll();
    }

    document.querySelectorAll('.nav-links a, .hero-btns a, .scroll-down').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var target = document.getElementById(this.getAttribute('href').slice(1));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            closeNav();
        });
    });

    function sectionUnderNav(section) {
        if (!section || !navbar) return false;
        var navHeight = navbar.offsetHeight;
        var rect = section.getBoundingClientRect();
        return rect.top <= navHeight && rect.bottom > navHeight;
    }

    function updateNavbarScroll() {
        if (!navbar) return;
        if (navbar.classList.contains('nav-open')) {
            navbar.classList.add('scrolled');
            return;
        }

        var hero = document.getElementById('home');
        var contact = document.getElementById('contact');
        var overImageSection = sectionUnderNav(hero) || sectionUnderNav(contact);

        /* Fully transparent over hero & contact; frosted glass elsewhere while scrolling */
        navbar.classList.toggle('scrolled', !overImageSection);
    }

    window.addEventListener('scroll', updateNavbarScroll, { passive: true });
    window.addEventListener('resize', handleWindowResize, { passive: true });
    updateNavbarScroll();

    // —— Scroll reveal ——
    var revealCards = document.querySelectorAll('.project-card, .about-gallery-item, .path-card, .pillar');
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && revealCards.length) {
        revealCards.forEach(function (card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });

        window.addEventListener('scroll', function () {
            revealCards.forEach(function (card) {
                if (card.getBoundingClientRect().top < window.innerHeight - 80) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }, { passive: true });

        window.dispatchEvent(new Event('scroll'));
    }

    // —— Competency accordion ——
    document.querySelectorAll('.competency-trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var item = trigger.closest('.competency-item');
            var willOpen = !item.classList.contains('open');

            document.querySelectorAll('.competency-item').forEach(function (other) {
                other.classList.remove('open');
                other.querySelector('.competency-trigger').setAttribute('aria-expanded', 'false');
            });

            if (willOpen) {
                item.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // —— Project modal ——
    function displayProjectVideo(src) {
        var imageDisplay = document.getElementById('modalImageDisplay');
        var counter = document.getElementById('modalImageCounter');
        var prevBtn = document.getElementById('modalPrevImage');
        var nextBtn = document.getElementById('modalNextImage');

        if (!imageDisplay) return;

        imageDisplay.innerHTML =
            '<video src="' + src + '" controls playsinline class="modal-project-video"></video>';
        imageDisplay.classList.add('has-image');

        if (counter) counter.style.display = 'none';
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }

    function displayProjectImage(index) {
        if (!currentProjectImages.length) return;

        if (index < 0) {
            currentImageIndex = currentProjectImages.length - 1;
        } else if (index >= currentProjectImages.length) {
            currentImageIndex = 0;
        } else {
            currentImageIndex = index;
        }

        var imageDisplay = document.getElementById('modalImageDisplay');
        var counter = document.getElementById('modalImageCounter');
        var prevBtn = document.getElementById('modalPrevImage');
        var nextBtn = document.getElementById('modalNextImage');
        var current = currentProjectImages[currentImageIndex];
        var hasMultiple = currentProjectImages.length > 1;

        if (isImageFile(current)) {
            var imageAlt = currentProjectTitle
                ? currentProjectTitle + ' — image ' + (currentImageIndex + 1)
                : 'Project image ' + (currentImageIndex + 1);
            imageDisplay.innerHTML = '<img src="' + current + '" alt="' + imageAlt + '" class="modal-project-img">';
            imageDisplay.classList.add('has-image');
        } else if (isVideoFile(current)) {
            imageDisplay.innerHTML =
                '<video src="' + current + '" controls playsinline class="modal-project-video"></video>';
            imageDisplay.classList.add('has-image');
        } else {
            imageDisplay.textContent = current;
            imageDisplay.classList.remove('has-image');
        }

        counter.textContent = (currentImageIndex + 1) + ' / ' + currentProjectImages.length;
        prevBtn.style.display = hasMultiple ? 'flex' : 'none';
        nextBtn.style.display = hasMultiple ? 'flex' : 'none';
        counter.style.display = hasMultiple ? 'block' : 'none';
    }

    function updateProjectModal(data) {
        currentProjectTitle = data.title || '';
        setText('modalProjectTitle', data.title);
        setText('modalProjectSubtitle', data.subtitle);

        var section1Text = document.getElementById('modalSection1Text');
        var section1 = section1Text ? section1Text.closest('.modal-section') : null;
        if (section1) {
            if (data.description) {
                section1.hidden = false;
                setText('modalSection1Title', '1. Description');
                setText('modalSection1Text', data.description);
            } else if (data.problem) {
                section1.hidden = false;
                setText('modalSection1Title', '1. The Problem');
                setText('modalSection1Text', data.problem);
            } else {
                section1.hidden = true;
            }
        }

        var ideaText = document.getElementById('modalSection2Text');
        var ideaSection = ideaText ? ideaText.closest('.modal-section') : null;
        if (ideaSection) {
            if (data.idea) {
                ideaSection.hidden = false;
                setText('modalSection2Title', '2. The Idea');
                setText('modalSection2Text', data.idea);
            } else {
                ideaSection.hidden = true;
            }
        }

        fillProjectLink(data.link, data.linkLabel, data.linkHeading);
        fillRecognition(data.recognition);
        fillTeam(data.team);
        fillJourney(data.journey);

        var modalResults = document.querySelector('.modal-results');
        var hasResults = data.resultA && data.resultB;
        if (modalResults) {
            modalResults.style.display = hasResults ? '' : 'none';
        }
        if (hasResults) {
            setText('modalResultA', data.resultA);
            setText('modalResultAText', data.resultAText);
            setText('modalResultB', data.resultB);
            setText('modalResultBText', data.resultBText);
        }

        if (data.images && data.images.length) {
            currentProjectImages = data.images;
            currentImageIndex = 0;
            displayProjectImage(0);
        } else if (data.video) {
            displayProjectVideo(data.video);
        } else {
            currentProjectImages = ['📸'];
            currentImageIndex = 0;
            displayProjectImage(0);
        }

        fillTags('modalTech', data.technologies);
        fillTimeline(data.timeline, data.timelineTotal);

        var stepsContainer = document.getElementById('modalSteps');
        var stepsSection = stepsContainer ? stepsContainer.closest('.modal-section') : null;
        if (stepsSection) {
            if (data.steps && data.steps.length) {
                stepsSection.hidden = false;
                fillSteps(data.steps);
            } else {
                stepsSection.hidden = true;
                stepsContainer.innerHTML = '';
            }
        }

        var learningsList = document.getElementById('modalLearnings');
        var learningsSection = learningsList ? learningsList.closest('.modal-section') : null;
        if (learningsSection) {
            if (data.learnings && data.learnings.length) {
                learningsSection.hidden = false;
                fillList('modalLearnings', data.learnings);
            } else {
                learningsSection.hidden = true;
                learningsList.innerHTML = '';
            }
        }

        var improvementsList = document.getElementById('modalImprovements');
        var improvementsSection = improvementsList ? improvementsList.closest('.modal-section') : null;
        if (improvementsSection) {
            if (data.improvements && data.improvements.length) {
                improvementsSection.hidden = false;
                fillList('modalImprovements', data.improvements);
            } else {
                improvementsSection.hidden = true;
                improvementsList.innerHTML = '';
            }
        }

        renumberModalSections(data);
    }

    function openProjectModal(key) {
        var data = projectData[key];
        if (!data || !projectModal) return;
        updateProjectModal(data);
        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        lockBodyScroll(true);
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        lockBodyScroll(false);
    }

    document.querySelectorAll('.project-card').forEach(function (card) {
        card.addEventListener('click', function (event) {
            if (event.target.closest('.project-action')) {
                event.stopPropagation();
            }
            openProjectModal(card.dataset.project);
        });
    });

    if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
    if (projectModal) {
        projectModal.addEventListener('click', function (event) {
            if (event.target === projectModal) closeProjectModal();
        });
    }

    var prevImageBtn = document.getElementById('modalPrevImage');
    var nextImageBtn = document.getElementById('modalNextImage');
    if (prevImageBtn) prevImageBtn.addEventListener('click', function () { displayProjectImage(currentImageIndex - 1); });
    if (nextImageBtn) nextImageBtn.addEventListener('click', function () { displayProjectImage(currentImageIndex + 1); });

    // —— Activity modal ——
    function openActivityModal(key) {
        var data = activityData[key];
        if (!data || !activityModal || !proofImageContainer) return;

        setText('proofTitle', data.title);
        setText('proofDescription', data.description);

        if (data.image) {
            proofImageContainer.innerHTML = '<img src="' + data.image + '" alt="' + data.title + '" class="proof-photo">';
            proofImageContainer.classList.add('has-photo');
        } else {
            proofImageContainer.innerHTML = '<div class="proof-image-placeholder">' + (data.icon || '📸') + '</div>';
            proofImageContainer.classList.remove('has-photo');
        }

        activityModal.classList.add('open');
        activityModal.setAttribute('aria-hidden', 'false');
        lockBodyScroll(true);
    }

    function closeActivityModal() {
        if (!activityModal) return;
        activityModal.classList.remove('open');
        activityModal.setAttribute('aria-hidden', 'true');
        lockBodyScroll(false);
    }

    document.querySelectorAll('.path-more').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            var card = button.closest('.path-card');
            if (card) openActivityModal(card.dataset.activity);
        });
    });

    if (activityModalClose) activityModalClose.addEventListener('click', closeActivityModal);
    if (activityModal) {
        activityModal.addEventListener('click', function (event) {
            if (event.target === activityModal) closeActivityModal();
        });
    }

    // —— Global keyboard shortcuts ——
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (projectModal && projectModal.classList.contains('open')) closeProjectModal();
            else if (activityModal && activityModal.classList.contains('open')) closeActivityModal();
            else if (navbar && navbar.classList.contains('nav-open')) closeNav();
            return;
        }

        if (projectModal && projectModal.classList.contains('open')) {
            if (event.key === 'ArrowLeft') displayProjectImage(currentImageIndex - 1);
            if (event.key === 'ArrowRight') displayProjectImage(currentImageIndex + 1);
        }
    });
})();
