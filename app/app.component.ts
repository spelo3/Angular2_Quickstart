import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <h2>{{race.name}}</h2>
        <p>{{race.date}}</p>
        <p>{{race.about}}</p>
        <p>{{race.entryFee}}</p>`
})
export class AppComponent {
    title = 'Ultra Racing';
    race = {
        "id": 1,
        "name": "Daytona Thunderdome",
        "date": new Date('2512-01-04T14:00:00'),
        "about": "Race through the ruins of an ancient Florida battle arena.",
        "entryFee": 3200
    };
}
