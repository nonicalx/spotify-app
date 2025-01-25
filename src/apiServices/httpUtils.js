//Created by Nonso Oranye in 2025

import { showErrorMessage } from "./notifications";

/**
 * Contains utility functions for making GET, POST, PATCH and DELETE request.
 */

async function getData(url) {
  try {
    const response = await fetch(url);
/**
 * utils functions to the main functions of this module
 */

async function tryCatch(fxn) {
  try {
    return await fxn();
  } catch (error) {
    showErrorMessage(error.message);
  }
}

async function generateResponse(response) {
  if (!response.ok) {
    throw new Error(`Responded with error status: ${response.status}`);
  }
  return await response.json();
}
