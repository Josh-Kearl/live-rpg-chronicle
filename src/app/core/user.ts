import { RepositionScrollStrategy } from "@angular/cdk/overlay";

export interface Roles{
    narrator?: boolean;
    admin?: boolean;
    player?: boolean;
}



export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string; 
    userTypeId?: string;

    roles: Roles;
  }