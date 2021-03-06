import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class AlertService {

    constructor(private snackBar: MatSnackBar) {}

    success(message: string) {
        this.snackBar.open(message, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }

    info(message: string) {
        this.snackBar.open(message, '×', { panelClass: 'info', verticalPosition: 'top', duration: 3000 });
    }

    error(message: string) {
        this.snackBar.open(message, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
}