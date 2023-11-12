const extractFileIdFromGoogleDriveLink = (link) => {
  // Match the file ID using a regular expression
  const match = link.match(/\/file\/d\/([^/]+)/);

  if (match && match[1]) {
    // Construct and return the direct download link
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  } else {
    // Return null if the link doesn't match the expected format
    return null;
  }
};

export { extractFileIdFromGoogleDriveLink };
