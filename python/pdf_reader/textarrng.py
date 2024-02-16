import re

def parse_text(text):
    data = {}
    current_section = None

    # Split text into sections based on all caps headings
    sections = re.split(r'\n(?=[A-Z\s]{5,}:)', text.strip())

    for section in sections:
        lines = section.strip().split('\n')
        section_heading = lines[0].strip()
        section_content = '\n'.join(lines[1:]).strip()

        if section_heading == 'CAREER OBJECTIVE':
            data['Career Objective'] = section_content
        elif section_heading == 'EDUCATION QUALIFICATION':
            education = {}
            for line in section_content.split('\n'):
                if line.strip():
                    key, value = map(str.strip, line.split(':', 1))
                    education[key] = value
            data['Education Qualification'] = education
        elif section_heading == 'TECHNICAL SKILLS':
            technical_skills = {}
            for line in section_content.split('\n'):
                if line.strip():
                    key, value = map(str.strip, line.split(':', 1))
                    technical_skills[key] = value.split(',')
            data['Technical Skills'] = technical_skills
        elif section_heading == 'PROJECTS':
            projects = {}
            current_project = None
            for line in section_content.split('\n'):
                if line.strip():
                    if line.startswith('Title:'):
                        current_project = line.split(':', 1)[1].strip()
                        projects[current_project] = {}
                    elif line.startswith('Description:'):
                        projects[current_project]['Description'] = line.split(':', 1)[1].strip()
                    elif line.startswith('Tools used:'):
                        projects[current_project]['Tools used'] = line.split(':', 1)[1].strip()
                    elif line.startswith('Learning Outcome:'):
                        projects[current_project]['Learning Outcome'] = line.split(':', 1)[1].strip()
            data['Projects'] = projects
        elif section_heading == 'CO-CURRICULARACTIVITIES & EXTRA-CURRICULARACTIVITIES':
            activities = {'Co-Curricular Activities': [], 'Extra-Curricular Activities': []}
            current_activity_type = None
            for line in section_content.split('\n'):
                if line.strip():
                    if line.strip().startswith('Co-Curricular Activities'):
                        current_activity_type = 'Co-Curricular Activities'
                    elif line.strip().startswith('Extra-Curricular Activities'):
                        current_activity_type = 'Extra-Curricular Activities'
                    else:
                        activities[current_activity_type].append(line.strip())
            data['Activities'] = activities
        elif section_heading == 'AWARDS & ACHIEVEMENTS':
            awards = section_content.split('\n')
            data['Awards & Achievements'] = awards
        elif section_heading == 'PERSONAL DETAILS':
            personal_details = {}
            for line in section_content.split('\n'):
                if line.strip():
                    key, value = map(str.strip, line.split(':', 1))
                    personal_details[key] = value
            data['Personal Details'] = personal_details
        elif section_heading == 'REFERENCE':
            references = {}
            for line in section_content.split('\n'):
                if line.strip():
                    key, value = map(str.strip, line.split(':', 1))
                    references[key] = value
            data['Reference'] = references

    return data

# Sample text
sample_text = """
CAREER OBJECTIVE
KOMERA JAYA KRISHNA
2-70 Krishnappa building,
Chinnaganahalli,avalahalli,
Bengaluru-560049
EmailID:
koya19ec@cmrit.ac.in
 Mobile No:7259348611
Passionate about coding ,machine learning , IoT. looking for responsible carrer in Machine learning
and use my skills to achieve the goals and objectives of  the comapany as well as enhance my
knowledge,abilities,experience towards achieving things faster.
EDUCATION QUALIFICATION

Bachelors of Engineering – Electronics and Communication Engineering
CMR Institute of Technology, Bangalore
7.3 CGPA, 2023(Pursuing)

Pre – University Course –
Govt independent pu college,
Hoskote,banglore,
64%,2019

SSLC
Z.P high School, NR palli,AP
9.7 CGPA, 2017
TECHNICAL SKILLS

Languages

 :  Python(moderate), HTML(basic),verilog HDL(basic),C programming

Software

 : Solid Edge, MATLAB,  XILINX, Pydroid.Visual studios
PROJECTS

Project (Mini Project)
Title: Flower Buds cutting
Description: Smart device to identify and cut the budded flowers
Tools

    used

 : Arduino UNO,CAD
Learning

        Outcome

 : Learned using sensors and circuit Designing.
.
CO-CURRICULARACTIVITIES & EXTRA-CURRICULARACTIVITIES
Co-Curricular

    Activities


     Online courses : -  Python using sololearn,Html using sololearn and Mimo, Data science and
machine learning in udemy
     Cerfications      : - Python Programming(Sololearn), Machine Learning(udemy),HTML(Mimo)
 Extra-Curricular

   Activities:


 Badminton, Chess , Gymnastics.
  Creating a automated work using Python.
 AWARDS & ACHIEVEMENTS

Awarded as  2nd Position in Science District Collabaration AP in 2016
PERSONAL DETAILS
Date of Birth
: 31/08/2001
Gender
: Male
Nationality
:Indian
Father’s Name
:Komera Venkata Ramana
Marital Status
: Unmarried
Permanent Address :Krishanappa Building,SLV bakery ,Chinnaganahalli,avalahalli,Banglore
560049
 Languages Known
: English, Hindi,Kannada,Telugu
Hobbies
: Reading Books, Gymnastics, Badmintion, Creating Automated Machines,
  Paintiing,
 REFERENCE

Name: Dr. R. Elumalai
Designation: HOD, Dept. Of ECE, CMRIT
Email ID: hod.ece@cmrit.ac.in
Phone No: 8495042173

Name: Dr.Suganya S
Designation: Assistant Professor, Dept of ECE, CMRIT
Email ID: suganya.s@cmrit.ac.in
Phone No:9900869989  ,,,,CAN U GIVE CODE FOR THIS TEXT"""


# Parsing the text
parsed_data = parse_text(sample_text)

# Printing the structured data
for section, content in parsed_data.items():
    print(section)
    print(content)
    print()
