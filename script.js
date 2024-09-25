//Javier Solis
//https://www.linkedin.com/in/android-developer-peru/
//https://github.com/javier-solis

// Selecciona el elemento de entrada por su ID
const inputElement = document.querySelector('#react-select-113-input');

const skills = [
    // Lenguajes
    "Kotlin", "Java", "Swift", "Objective-C", "JavaScript",
    
    // Frameworks y Librerías
    "Android SDK", "Jetpack Compose", "Picasso", "Glide", "Lottie", 
    "Hilt", "Koin", "Gson", "JSON", "Moshi",
    
    // Plataformas y Herramientas
    "Android Studio", "Xcode", "Custom View", "XML", "Firebase",
    
    // Arquitecturas y Componentes
    "MVP", "MVVM", "SQLite", "Room", "DataBinding",
    "LifeCycle", "LiveData", "ViewModel", "Google Maps", "Restful",
    
    // Bases de Datos
    "SQLite", "Room", "Firebase Realtime", "Firestore",
    
    // Cloud
    "AWS Lambda", "S3", "EC2", "SNS", "GCP Foundation", 
    
    // Firebase
    "Firebase Auth UI", "Firebase Storage", "Firebase Analytics", "Cloud Messaging",
    
    // Testing
    "UI Automator", "JUnit", "Espresso", "Appium"
  ];

for (const skill_item of skills) {
    // Establece el valor en el input, pero React podría no actualizar su estado solo con esto
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value').set;
    nativeInputValueSetter.call(inputElement, skill_item);

    // Crea y dispara un evento 'input' que React puede detectar
    const inputEvent = new Event('input', { bubbles: true });
    inputElement.dispatchEvent(inputEvent);

    // Finalmente, simula la pulsación de Enter
    const enterEvent = new KeyboardEvent('keydown', {
        key: 'Enter',
        keyCode: 13, // Código de la tecla Enter
        bubbles: true, // El evento puede propagarse
        cancelable: true // Se puede cancelar el evento
    });

    inputElement.dispatchEvent(enterEvent);    
}