import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class WebsiteMonitorTest {

    @Test
    public void monitorWebsite() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver"); // Update this path
        WebDriver driver = new ChromeDriver();
        driver.get("https://your-target-website.com");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10)); // Use Duration for timeout

        boolean offerDetected = false;

        while (!offerDetected) {
            try {
                WebElement offerElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("offer-element-id")));
                // Offer detected, trigger notification or perform other actions
                System.out.println("Offer detected!");
                // You can use libraries like Java Sound or JavaFX to play a sound notification
                offerDetected = true; // Exit loop if offer is found
            } catch (Exception e) {
                // Offer not detected, continue monitoring
                System.out.println("Offer not found, retrying...");
                try {
                    Thread.sleep(5000); // Wait before retrying (5 seconds)
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt(); // Restore interrupted status
                }
            }
        }

        driver.quit();
    }
}