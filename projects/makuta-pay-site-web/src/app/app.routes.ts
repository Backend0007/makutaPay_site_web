import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OffreEmploiComponent } from './pages/offre-emploi/offre-emploi.component';
import { PagesNotFoundComponent } from './navigation/pages-not-found/pages-not-found.component';

export const routes: Routes = [
    { path: '', title: 'Accueil', component: HomeComponent },
    { path: 'about', title: 'About', component: AboutComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
    { path: 'offreEmploi', title: 'Offre emploi', component: OffreEmploiComponent },
    { path: '**', title: 'Page non trouvée', component: PagesNotFoundComponent } // Wildcard route for a 404 page
];
