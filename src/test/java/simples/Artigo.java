package simples;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class Artigo {
    String url;
    WebDriver driver;

    @Before
    public void iniciar(){
        url = "https://pt.wikipedia.org";
        System.setProperty("webdriver.gecko.driver", "drivers/geckodriver029/geckodriver.exe");
        driver = new FirefoxDriver(); //Instanciar o Selenium como o Firefox Driver

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(60000, TimeUnit.MILLISECONDS); //Espera Implicita
    }

    @Test
    public void consultarArtigo(){
        //Abrir o site
        driver.get(url);

        //Pesquisar por "Ovo de Pascoa"
        driver.findElement(By.id("searchInput")).sendKeys("Ovo de Páscoa");
        driver.findElement(By.id("searchButton")).click();

        //Validar o titulo da pagina de retorno
       // assertEquals("Resultados da pesquisa de Ovos da Pásco ? Wikipédia, a enciclopédia livre", driver.getTitle());
        assertTrue(driver.getTitle().contains("Ovo de Páscoa"));
    }

    @After
    public void finalizar(){
        driver.quit();

    }
}
