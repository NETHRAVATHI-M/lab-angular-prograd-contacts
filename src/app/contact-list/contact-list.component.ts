import { contacts } from './../contact';
import { userContact } from './../userContact';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  constructor() { }
newname='';
email:'';
phonenumber:'';
image: any;
  ngOnInit() {
  // initialize your contacts here
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
    newContact={name:this.newname,
    email:this.email,
    phoneNumber:this.phonenumber,
image:this.image}

this.contacts.unshift(newContact);

     // Fill your code here
    // add contact to contacts list
    // clear inputs
   
  }
}
