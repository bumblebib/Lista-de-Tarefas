package bibi.listadetarefas;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends Activity {

    private WebView web;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        web = findViewById(R.id.web);
        WebSettings webSettings = web.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);

        String databasePath = getApplicationContext()
                .getDir("database", Context.MODE_PRIVATE).getPath();
        webSettings.setDatabasePath(databasePath);

        web.loadUrl("file:///android_asset/index.html");

    }

}