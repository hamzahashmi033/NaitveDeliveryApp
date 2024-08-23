package com.food

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.soloader.SoLoader
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage
// Import other necessary packages here

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> {
            return listOf(
                ReactNativeFirebaseAppPackage()
                // Add other packages here
            )
        }

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override fun getJSMainModuleName(): String = "index"
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}
