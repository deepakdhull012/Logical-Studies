import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { AuthGuard } from "../../guards/auth.guard";



export const tabsRoutes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'landing',
                loadChildren: './../../pages/landing/landing.module#LandingPageModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'newsFeed',
                loadChildren: './../../pages/news-feed/news-feed.module#NewsFeedPageModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'profile',
                loadChildren: './../../pages/profile/profile.module#ProfilePageModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                redirectTo: 'landing',
                pathMatch: 'full'
            }
        ]
    }
]