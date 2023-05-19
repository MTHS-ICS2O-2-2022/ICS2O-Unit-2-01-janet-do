// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This file contains the JS functions for index.html
//This generates hello world

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-2-01-janet-do/sw.js", {
    scope: "/ICS2O-Unit-2-01-janet-do/",
  })
}
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "Hello, World!"
}
