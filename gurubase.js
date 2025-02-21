// Customize widget settings
const widgetSettings = {
    widgetId: "OeiknZ38j9YuuZpaeiCb1I_i14MDtqr64eHotQNKNoY", // Replace with your widget ID
    // Optional configurations:
    // text: "Ask AI",                                    // Button text
    // margins: { bottom: "20px", right: "20px" },       // Widget positioning
    // lightMode: false,                                  // Force light mode
    // name: "YOUR_NAME",                                 // Widget name
    // iconUrl: "YOUR_ICON_URL",                         // Widget icon URL
    // bgColor: "#000000",                               // Widget background color
  };
  
  // Load the GuruBase widget
  const guruScript = document.createElement("script");
  guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
  guruScript.defer = true;
  guruScript.id = "guru-widget-id";
  
  // Add widget settings as data attributes
  Object.entries(widgetSettings).forEach(([key, value]) => {
    const dataKey = `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    const dataValue = typeof value === 'object' ? JSON.stringify(value) : value;
    guruScript.setAttribute(dataKey, dataValue);
  });
  
  // Append the script to the document
  document.body.appendChild(guruScript);