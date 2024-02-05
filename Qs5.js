// Q5. You are building a shipping application. Write a program that takes the type of package (“standard”,
//     “express”, or "overnight") and uses a switch statement to calculate and print the estimated delivery time
//     based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
//     “overnight” would be delivered the next day.

function calculateDeliveryTime(packageType) {
    let estimatedDeliveryTime;
  
    switch (packageType) 
    {
      case "standard":
        estimatedDeliveryTime = "3-5 days";
        break;
      case "express":
        estimatedDeliveryTime = "1-2 days";
        break;
      case "overnight":
        estimatedDeliveryTime = "next day";
        break;
      default:
        estimatedDeliveryTime = "unknown";
        break;
    }
  
    console.log(`The estimated delivery time for ${packageType} is = ${estimatedDeliveryTime}.`);
  }
  
  calculateDeliveryTime("standard");
  calculateDeliveryTime("express");
  calculateDeliveryTime("overnight");
  calculateDeliveryTime("unknownPackage");
  //OUTPUT:
// The estimated delivery time for standard is = 3-5 days.
// The estimated delivery time for express is = 1-2 days.
// The estimated delivery time for overnight is = next day.
// The estimated delivery time for unknownPackage is = unknown.