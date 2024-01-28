# Dark-Pattern-Detection-System
In our proposed solution, we aim to develop a robust browser extension designed to identify and combat Dark Patterns, utilizing a dual-pronged approach:

1. DOM Analysis:
The DOM (Document Object Model) analysis serves as a foundational component, focusing on uncovering hidden dark patterns within the core structure of web pages. This method is integral for detecting anomalies and irregularities that may indicate the presence of deceptive design elements.

2. Deep Learning Models:
We plan to implement three sophisticated deep learning models to analyze Dark Patterns associated with the UI elements by taking screenshot of webpage:
YOLOv5 (You Only Look One Level): This model specializes in the visual detection of dark patterns within images, providing a comprehensive understanding of visual elements that might deceive users.
EasyOCR: Employed for its proficiency in extracting text from screenshots, this model aids in analyzing textual content embedded within web interfaces.
DistilBERTClassifier: Serving as a text classifier, this model categorizes textual content into Dark Pattern Behavior Highlight (DPBH) categories, offering a nuanced understanding of the deceptive patterns present in the language used.

The combined results from DOM analysis and deep learning models contribute to the generation of a comprehensive report for each website under scrutiny. This report includes a scoring mechanism that quantifies the prevalence of dark patterns on the website. A higher score indicates a greater occurrence of these deceptive design practices, enabling the identification and flagging of websites that warrant further investigation or user caution. This integrated solution ensures a holistic and sophisticated approach to identifying and addressing dark patterns in the digital landscape. 

In addition to detecting dark patterns, there are a few more functionalities we aim to include in our application:
A safemark icon on websites with minimal number of dark patterns.
A score will be displayed to the users based on the number of dark patterns on the website they’re using.
A warning will be displayed on the website if the number of dark patterns is unusually high.
A feedback system for users to  report instances of dark patterns on websites.
