// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Click \"Continue\" to proceed to the experiment"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
document.body.style.color = 'grey'




}
      },
      "title": "Continue To Experiment"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Consent Form ",
          "content": "Cristina Weiner (weinerc@myumanitoba.ca)\nJob Title: M.A. Student\nDepartment of Psychology\nUniversity of Manitoba\nWinnipeg, Manitoba, R3T 2N2\n\nDr. Jonathan Marotta, Ph.D. (Jonathan.Marotta@umanitoba.ca)\nJob Title: Professor\nDepartment of Psychology\nUniversity of Manitoba\nWinnipeg, Manitoba, R3T 2N2\n\nProject Title: Predictive Eye Movements When Clicking On Targets\nSupervisor: Dr. Jonathan Marotta, Ph.D.\nStudent Researchers: Cristina Weiner\n"
        },
        {
          "required": true,
          "type": "text",
          "title": "Purpose",
          "content": "We are interested in where you are looking when moving to click on computer-generated target objects."
        },
        {
          "required": true,
          "type": "text",
          "title": "Description",
          "content": "This study will last approximately 30 minutes. During the experiment, you will click on a start button to begin each trial. A picture will briefly appear in the center of the screen. Then, a grey rectangle will appear in the center of the screen; you will click on the grey rectangle. The rectangle will then jump to either to the left or to the right. When the rectangle is in its new location, click on it quickly but naturally before it disappears. Prior to this task, you will be asked to fill out a brief questionnaire involving questions about your age, sex, handedness, vision, and the device you are currently using to complete the experiment."
        },
        {
          "required": true,
          "type": "text",
          "title": "Risks and Benefits",
          "content": "There are no risks (physical, psychological, and\u002For emotional) inherent in the tasks you will perform, but some of the tests may be repetitive. By participating in this study you will be providing valuable data regarding how the way we perceive our visual environment affects the way we interact with it. "
        },
        {
          "required": true,
          "type": "text",
          "title": " Costs and Payments",
          "content": "There are no fees or charges to participate in this study. You will receive 1 experimental credit for your participation in this study. "
        },
        {
          "required": true,
          "type": "text",
          "title": "Confidentiality",
          "content": "Your information will be kept confidential. You will be referred to by a code number. After completing the experiment, all identifying information will be saved separately from your experimental data, and will only be used to assign you participation credit. Your files will only be accessible by the investigators. Results from this study will be disseminated through conference presentations and refereed publications. Participant confidentiality will not be jeopardized. \n"
        },
        {
          "required": true,
          "type": "text",
          "title": "Voluntary Consent",
          "content": "By selecting the 'I Consent' option below, you are indicating that you have understood to your satisfaction the information regarding participation in the research project and agree to participate as a subject. In no way does this waive your legal rights nor release the researchers, sponsors, or involved institutions form their legal and professional responsibilities. You are free to withdraw from the study at any time by exiting your browser (participation is completely voluntary), and\u002For refrain from answering any questions you prefer to omit, without prejudice or consequence. You will also still receive your participation credit if you encounter any technical difficulties, and cannot continue. This means that should you choose to withdraw at any point from the study, you will still receive 1 participation credit. \n\nThe University of Manitoba may look at your research records to see that the research is being done in a safe and proper way.\nThis research has been approved by the Research Ethics Board 1 (REB1) at the University of Manitoba. If you have any concerns or complaints about this project you may contact any of the above named persons or the Human Ethics Coordinator (HEC) at (204) 474-7122 (Email: humanethics@umanitoba.ca). \n\nPlease click on the \"I Consent\" button below to indicate that you wish to proceed with the experiment. \n\nPlease press the \"Esc\" key and exit your browser if you do not wish to proceed with the experiment. \n\nThank you. "
        },
        {
          "required": false,
          "type": "input",
          "label": "If you would like to receive a general summary of the results from this study when it is completed, please provide your email address below:",
          "name": "if-you-would-like-to-receive-a-general-summary-of-the-results-from-this-study-when-it-is-completed-please-provide-your-email-address-below:"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Do you understand and consent to these terms? ",
          "options": [
            {
              "label": "I Consent",
              "coding": "1"
            },
            {
              "label": "I Do Not Consent",
              "coding": "2"
            }
          ],
          "name": "Participant_Consent"
        },
        {
          "required": true,
          "type": "text",
          "content": "Thank you for your participation!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent Form"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Debriefing ",
          "content": "In this study we were interested in where on the target object you clicked when it moved to the left or right of the screen, and the trajectory of your mouse movements. Through the examination and analysis of these mouse movements, we also sought to infer where you were looking when you made those mouse movements. Despite the co-occurrence of both vision and visuomotor processes, vision and motor functioning are typically studied independently, so their critical interactions are poorly understood. What is currently lacking in this area is a clear understanding of where people are looking while clicking on targets of varying complexity. Specifically, this study sought to expand current understandings of visual and visuomotor interactions by recording mouse movements and inferring the location of gaze made to visually presented targets. If you have any questions later on, please feel free to contact me – my contact information is listed below, or, you can contact the Human Ethics Coordinator at humanethics@umanitoba.ca. \n\nCristina Weiner           \nDepartment of Psychology \nUniversity of Manitoba\nweinerc@myumanitoba.ca\n\nThank you again for participating.\n\nPlease press \"Esc\" to exit the experiment. \n\n\n"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing Form (No Consent) ",
      "tardy": true,
      "skip": "${this.state['Participant_Consent'] == '1'}"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Chtml\u003E\n    \u003Cbody\u003E\n\n\u003Cb\u003EClicking the 'Continue' button below will open up a new window redirecting you to SONA, and awarding your 1 participation credit.  Once the new window opens, please minimize it and continue the experiment.  You may return to the new window following completion of the experiment.\u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n    Some browsers use pop-up blockers which may prevent the new window from opening.  If for some reason the new window does not open, and you do not receive credit for your participation in this study, please email weinerc@myumanitoba.ca AFTER COMPLETING THE EXPERIMENT.\u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n  \n  Reminder: You are free to withdraw from the study at any time by exiting your browser (participation is completely voluntary), and\u002For refrain from answering any questions you prefer to omit, without prejudice or consequence.  You will also still receive your participation credit if you encounter any technical difficulties, and cannot continue.  This means that should you choose to withdraw at any point from the study, you will still receive 1 participation credit. \u003C\u002Fi\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E\n\n    \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E\n\n\u003Cbutton onclick=\"window.open('https:\u002F\u002Fumanitobapsych.sona-systems.com\u002Fwebstudy_credit.aspx?experiment_id=1317&credit_token=ea11add557884894bfa2af16c2a640c8&survey_code=${this.state.url.id}'\n,'','width=,height=,resizeable=no');\" id=\"Continue\" class=\"float-left submit-button\" \u003EContinue\u003C\u002Fbutton\u003E\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "click button#Continue": "Credit"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Demographics Form",
          "content": ""
        },
        {
          "required": false,
          "type": "input",
          "label": "Please record the make, model, and (diagonal) screen size of the device you are using (e.g. Macbook Pro 13.3 in.)",
          "name": "please-record-the-make-model-and-(diagonal)-screen-size-of-the-device-you-are-using-(e.g.-macbook-pro-13.3-in.)"
        },
        {
          "required": false,
          "type": "radio",
          "label": "How are you controlling the cursor on your device? ",
          "options": [
            {
              "label": "Finger on a track pad ",
              "coding": "1"
            },
            {
              "label": "Mouse ",
              "coding": "2"
            }
          ],
          "name": "how-are-you-controlling-the-cursor-on-your-device"
        },
        {
          "required": false,
          "type": "input",
          "label": "What is your age?",
          "name": "what-is-your-age"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Vision",
          "options": [
            {
              "label": "Normal",
              "coding": "1"
            },
            {
              "label": "Corrected-to-Normal (glasses, contacts, eye surgery, etc.)",
              "coding": "2"
            }
          ],
          "name": "vision"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Sex assigned at birth",
          "options": [
            {
              "label": "Male",
              "coding": "1"
            },
            {
              "label": "Female",
              "coding": "2"
            },
            {
              "label": "Prefer not to say",
              "coding": "3"
            }
          ],
          "name": "sex-assigned-at-birth"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to throw a ball?",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-throw-a-ball"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to brush your teeth? ",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-brush-your-teeth"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to eat soup with a spoon? ",
          "options": [
            {
              "label": "Left ",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-eat-soup-with-a-spoon"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to comb your hair? ",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-comb-your-hair"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to cut bread with a knife? ",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-cut-bread-with-a-knife"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to swing a tennis\u002Fbadminton racquet or bat? ",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-swing-a-tennisbadminton-racquet-or-bat"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to hammer a nail? ",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-hammer-a-nail"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to point to something accurately? ",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right ",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-point-to-something-accurately"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to write your name?  ",
          "options": [
            {
              "label": "Left ",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-write-your-name"
        },
        {
          "required": false,
          "type": "radio",
          "label": "Which hand do you use to control the cursor on the computer?",
          "options": [
            {
              "label": "Left",
              "coding": "1"
            },
            {
              "label": "Right",
              "coding": "2"
            }
          ],
          "name": "which-hand-do-you-use-to-control-the-cursor-on-the-computer"
        },
        {
          "required": false,
          "type": "radio",
          "options": [
            {
              "label": "Yes",
              "coding": "1"
            },
            {
              "label": "No ",
              "coding": "2"
            }
          ],
          "label": "Do you play any eye-hand coordination sports?",
          "name": "do-you-play-any-eye-hand-coordination-sports"
        },
        {
          "required": false,
          "type": "input",
          "label": "If yes, which sports do you play?",
          "name": "if-yes-which-sports-do-you-play"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographics Form"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
this.options.events['click button#fullscreen'] = function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

/* Continue to next screen */
this.end()
}
}
      },
      "title": "Full Screen",
      "content": "\u003Cbutton id=\"fullscreen\"\u003EPress to enter full screen\u003C\u002Fbutton\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Part 1: First, a quck task to get your screen set-up for the experiment ",
          "content": "Click the center of each circle with your cursor. \n\nTIP: You may need to be very precise with your clicking. "
        },
        {
          "required": true,
          "type": "text",
          "title": "Click 'Continue' when ready to proceed "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewportScale = 1
this.options.devicePixelScaling = false
}
      },
      "title": "Calibration Task Instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Horizontal_Pos": "0",
          "Vertical_Pos": "0",
          "": "Center"
        },
        {
          "Horizontal_Pos": "-300",
          "Vertical_Pos": "0",
          "": "Left"
        },
        {
          "Horizontal_Pos": "0",
          "Vertical_Pos": "150",
          "": "Up"
        },
        {
          "Horizontal_Pos": "0",
          "Vertical_Pos": "-150",
          "": "Down"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1
}
      },
      "title": "Screen Setup ",
      "plugins": [
        {
          "type": "mousetrap",
          "mode": "mousetrap",
          "path": "global.MousetrapPlugin"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "plugins": [
          {
            "type": "mousetrap",
            "mode": "mousetrap",
            "path": "global.MousetrapPlugin"
          }
        ],
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "circle",
                "left": "${parameters.Horizontal_Pos}",
                "top": "${parameters.Vertical_Pos}",
                "angle": 0,
                "width": 18,
                "height": 18,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff"
              },
              {
                "type": "circle",
                "left": "${parameters.Horizontal_Pos}",
                "top": "${parameters.Vertical_Pos}",
                "angle": 0,
                "width": 2.46,
                "height": 2.46,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "aoi",
                "left": "${parameters.Horizontal_Pos}",
                "top": "${parameters.Vertical_Pos}",
                "angle": 0,
                "width": 5.84,
                "height": 5.84,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Center": "Center"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1


}
            },
            "title": "Calibration",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": "0",
                "top": 0,
                "angle": 0,
                "width": "801",
                "height": "599.76",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"screen.png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "screen.png": "embedded\u002F95dc598cf4d3a492b97f9e92279fe00780676be50bcfabb2c40360632a76cb1f.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Mask ",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ],
            "timeout": "200"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "Today's experiment will examine mouse movements an individual makes when interacting with an object that changes position. \n\n\n\n\n\n",
          "title": "Experiment Instructions"
        },
        {
          "required": true,
          "type": "text",
          "content": "Please ensure that you are sitting with your head about 60cm (about two ruler lengths) away from the screen. ",
          "title": "Computer Sitting Distance"
        },
        {
          "required": true,
          "type": "text",
          "content": "At the beginning of each trial, you will see a black screen with a grey \"start\" button in the bottom-center. Please click on the \"start\" button to begin the trial.",
          "title": "Start Button"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"start_button.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "A grey rectangle will appear in the center of the screen. You will click on the grey rectangle. \n\nThe grey rectangle will then move to the left or right of where it was before. When it reappears in its new location, click on it quickly but naturally before it disappears. \n",
          "title": "Trial Beginning and Clicking"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"cueimgsampl.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "The experiment will begin on the next screen. \n\nPlease click the \"continue\" button to advance to the next screen. ",
          "title": "Transition"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {
        "ruler.jpg": "embedded\u002F53c4517f83af51cfa4cd59f115e054032e0a5489ab84e8e02aa0fe0997ebb07b.jpg",
        "sitting.jpg": "embedded\u002Fb43ef0f3cce2c1d411af7e48d7ffea9cd2ba6d2bd103fcaf95c5a7d34e3ece19.jpg",
        "Block.png": "embedded\u002F8f65d0be06da3cba8e915127f7b2a80beb25b729780e2f442a4262337f64c383.png",
        "start_button.png": "embedded\u002F30290609220bb49852425d67a21e2ef4e1760040b35e5731c53ca905701d3a0c.png",
        "50-50Cue.png": "embedded\u002Fc4893cfd9f513e8fabac5d88fc993cd5310142a6e7e600a04344a3a7169cff55.png",
        "Left100Cue.png": "embedded\u002F0d36b357cd61ca98fda76d7458ddfe97bd2738bc1c0fabc2cb69c04fb975d9f3.png",
        "Right100Cue.png": "embedded\u002Fd27392f136ca91eae8c917d1628ddf8575911a1815392e9d95b53541b00cc675.png",
        "ins pic.png": "embedded\u002F0dd6ebc0800ec19a911aad69cbbc4f9ad1d111935f6841353495b35e96e8aa3e.png",
        "cueimgsampl.png": "embedded\u002F34268e3e58252b1b1aac91ee6c36474c95ea3c7a625212d93a0efa635714fbd9.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Experiment Instructions"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Practice Trials",
          "content": "The following four trials will be for practice to familiarize you with the task. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
      },
      "title": "Practice Trials Instructions ",
      "plugins": [
        {
          "type": "mousetrap",
          "mode": "mousetrap",
          "path": "global.MousetrapPlugin"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Pos": "-300",
          "Cue": "50-50Cue.png"
        },
        {
          "Pos": "300",
          "Cue": "50-50Cue.png"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "3"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
      },
      "title": "Practice Trials",
      "plugins": [
        {
          "type": "mousetrap",
          "mode": "mousetrap",
          "path": "global.MousetrapPlugin"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
        },
        "title": "Sequence",
        "plugins": [
          {
            "type": "mousetrap",
            "mode": "mousetrap",
            "path": "global.MousetrapPlugin"
          }
        ],
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 261,
                "angle": 0,
                "width": 75.5,
                "height": 38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 261.92,
                "angle": 0,
                "width": 52.14,
                "height": 18.08,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "START",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "16",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 260.98,
                "angle": 0,
                "width": 75.5,
                "height": 38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start": "Start"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Start Button",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": "0",
                "angle": 0,
                "width": 78,
                "height": 78.13000000000001,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"50-50Cue.png\"] }",
                "autoScale": undefined
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "Block.png": "embedded\u002F8f65d0be06da3cba8e915127f7b2a80beb25b729780e2f442a4262337f64c383.png",
              "50-50Cue.png": "embedded\u002Fc4893cfd9f513e8fabac5d88fc993cd5310142a6e7e600a04344a3a7169cff55.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 

}
            },
            "title": "Cue",
            "timeout": "1000",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "aoi",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 147.86,
                "height": 74.7,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block"
              },
              {
                "type": "aoi",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": "149.83",
                "height": 74.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": ""
              },
              {
                "type": "rect",
                "left": "0",
                "top": 0,
                "angle": 0,
                "width": "151",
                "height": "76",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block": "Block"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
            },
            "title": "Block",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "aoi",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": "76",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block_D"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block_D": "Block_D"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Displaced Block",
            "timeout": "1000",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "The experiment will begin on the next screen. "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
      },
      "title": "Experiment Start",
      "plugins": [
        {
          "type": "mousetrap",
          "mode": "mousetrap",
          "path": "global.MousetrapPlugin"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Pos": "-300",
          "Cue": "50-50Cue.png"
        },
        {
          "Pos": "300",
          "Cue": "50-50Cue.png"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "3"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
      },
      "title": "Unbiased Loop",
      "plugins": [
        {
          "type": "mousetrap",
          "mode": "mousetrap",
          "path": "global.MousetrapPlugin"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
        },
        "title": "Sequence",
        "plugins": [
          {
            "type": "mousetrap",
            "mode": "mousetrap",
            "path": "global.MousetrapPlugin"
          }
        ],
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 261,
                "angle": 0,
                "width": 75.5,
                "height": 38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 261.92,
                "angle": 0,
                "width": 52.14,
                "height": 18.08,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "START",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "16",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 260.88,
                "angle": 0,
                "width": 75.5,
                "height": 38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start": "Start"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Start Button",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": "0",
                "angle": 0,
                "width": 78,
                "height": 78.13000000000001,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"50-50Cue.png\"] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "Block.png": "embedded\u002F8f65d0be06da3cba8e915127f7b2a80beb25b729780e2f442a4262337f64c383.png",
              "50-50Cue.png": "embedded\u002Fc4893cfd9f513e8fabac5d88fc993cd5310142a6e7e600a04344a3a7169cff55.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 

}
            },
            "title": "Cue",
            "timeout": "1000",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "0",
                "top": 0,
                "angle": 0,
                "width": "151",
                "height": "76",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 147.86,
                "height": 74.7,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block"
              },
              {
                "type": "aoi",
                "left": "0",
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block": "Block"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
            },
            "title": "Block",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "${parameters.Pos}",
                "top": "0",
                "angle": 0,
                "width": "151",
                "height": "76",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "aoi",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block_D"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block_D": "Block_D"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Displaced Block",
            "timeout": "1000",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "300",
          "Cue": "Right100Cue.png"
        },
        {
          "Pos": "150",
          "Cue": "Right100Cue.png"
        },
        {
          "Pos": "-150",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "-300",
          "Cue": "Left100Cue.png"
        },
        {
          "Pos": "300",
          "Cue": "Right100Cue.png"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "3"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
      },
      "title": "Biased Loop",
      "plugins": [
        {
          "type": "mousetrap",
          "mode": "mousetrap",
          "path": "global.MousetrapPlugin"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 


}
        },
        "title": "Sequence",
        "plugins": [
          {
            "type": "mousetrap",
            "mode": "mousetrap",
            "path": "global.MousetrapPlugin"
          }
        ],
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 261,
                "angle": 0,
                "width": 75.5,
                "height": 38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 261.92,
                "angle": 0,
                "width": 52.14,
                "height": 18.08,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "START",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "16",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 262.09,
                "angle": 0,
                "width": "75.5",
                "height": "38",
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Start"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Start": "Start"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Start Button",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": "0",
                "angle": 0,
                "width": 78.26,
                "height": 78.13000000000001,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.Cue] }",
                "autoScale": undefined
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "Left100Cue.png": "embedded\u002F0d36b357cd61ca98fda76d7458ddfe97bd2738bc1c0fabc2cb69c04fb975d9f3.png",
              "Right100Cue.png": "embedded\u002Fd27392f136ca91eae8c917d1628ddf8575911a1815392e9d95b53541b00cc675.png"
            },
            "responses": {
              "": "left_cue"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 

}
            },
            "title": "Cue",
            "timeout": "1000",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": "0",
                "top": 0,
                "angle": 0,
                "width": "151",
                "height": "76",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#aaaaaa"
              },
              {
                "type": "aoi",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block": "Block"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 

document.body.style.backgroundColor = 'black'
}
            },
            "title": "Block",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "aoi",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 147.89,
                "height": 73.33,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block_D"
              },
              {
                "type": "rect",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#aaaaaa"
              },
              {
                "type": "aoi",
                "left": "${parameters.Pos}",
                "top": 0,
                "angle": 0,
                "width": 151,
                "height": 76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "Block_D"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "click @Block_D": "Block_D"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.viewport = [800, 600]
this.options.viewportScale = 1 
}
            },
            "title": "Displaced Block",
            "timeout": "1000",
            "plugins": [
              {
                "type": "mousetrap",
                "mode": "mousetrap",
                "path": "global.MousetrapPlugin"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cbutton id=\"Continue\"\u003EContinue\u003C\u002Fbutton\u003E\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
/* Download data to firebase */
this.options.events['click button#Continue'] = function sendToFirebase() {
    const rng = new lab.util.Random();
  
  firebase.database().ref(rng.uuid4()).set({
    data: this.options.datastore.exportJson()
    });

/* Continue to next screen */
this.end()
}

}
      },
      "title": "Form"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Debriefing Form",
          "content": "Thank you for participating in this study.  \n\nIn this study we were interested in where on the target object you clicked when it moved to the left or right and the trajectory of your mouse movements. Through the examination and analysis of these mouse movements, we also sought to infer where you were looking when you made those mouse movements. Despite the co-occurrence of both vision and visuomotor processes, vision and motor functioning are typically studied independently, so their critical interactions are poorly understood. What is currently lacking in this area is a clear understanding of where people are looking while clicking on targets of varying complexity. Specifically, this study sought to expand current understandings of visual and visuomotor interactions by recording mouse movements and inferring the location of gaze made to visually presented targets. If you have any questions later on, please feel free to contact me – my contact information is listed below. Thank you again for participating.\n\nPlease press \"Esc\" to exit the experiment. \n\nCristina Weiner           \nDepartment of Psychology \nUniversity of Manitoba\nweinerc@myumanitoba.ca\n"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing Form "
    }
  ]
})

// Let's go!
study.run()