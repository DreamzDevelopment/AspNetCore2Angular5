import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { StoreTypeComponent } from "./components/storetype/storetype.component";

const appRoutes: Routes = [
    // path to home 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // store home path, for selected StoreType
    { 
        path: ':store', 
        component: StoreTypeComponent, 
        pathMatch: 'full', 
        data: {
            meta: {
                title: 'Selected store type',
                description: 'Description of the store type',
                'og:image': '/images/icons/store.png'
            }
        }
    },
    // notfound path
    { path: '**', redirectTo: 'home' }
];
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);