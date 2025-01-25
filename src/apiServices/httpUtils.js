//Created by Nonso Oranye in 2025

import { showErrorMessage } from "./notifications";

/**
 * Contains utility functions for making GET, POST, PATCH and DELETE request.
 */

async function getDataFromAPI(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Responded with error status: ${response.status}`);
    }
  } catch (error) {
    showErrorMessage(error.message);
  }
}
