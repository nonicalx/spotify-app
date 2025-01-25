//Created by Nonso Oranye in 2025

import { showErrorMessage } from "./notifications";

/**
 * Contains utility functions for making GET, POST, PATCH and DELETE request.
 */

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Responded with error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    showErrorMessage(error.message);
  }
}

export const http = { getData };
