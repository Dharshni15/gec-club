// Google Apps Script for Gender Equality Club Contact Form
// This script handles form submissions and stores them in Google Sheets
// Plus sends email notifications to administrators

// Replace with your actual Google Sheet ID
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'Contact Form Submissions';

// Replace with actual admin email addresses
const ADMIN_EMAILS = ['dinesh.nova@gmail.com', 'mohanasaranya.cse@kongu.edu'];

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Missing required fields' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = spreadsheet.insertSheet(SHEET_NAME);
      newSheet.getRange(1, 1, 1, 7).setValues([
        ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Source']
      ]);
      newSheet.getRange(1, 1, 1, 7).setFontWeight('bold');
      newSheet.setFrozenRows(1);
    }
    
    // Prepare row data
    const rowData = [
      new Date(), // Timestamp
      data.name,
      data.email,
      data.phone || '',
      data.subject,
      data.message,
      data.source || 'Website Contact Form'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification to admins
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        error: 'Internal server error',
        details: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(formData) {
  try {
    const subject = `New Contact Form Submission: ${formData.subject}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4f46e5;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
          <p style="margin: 0; color: #065f46;">
            <strong>Submission Time:</strong> ${new Date().toLocaleString('en-US', { 
              timeZone: 'Asia/Kolkata',
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          <p style="margin: 5px 0 0 0; color: #065f46;">
            <strong>Source:</strong> ${formData.source || 'Website Contact Form'}
          </p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;">
            <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>This is an automated notification from the Gender Equality Club website.</p>
          <p>© ${new Date().getFullYear()} Gender Equality Club, Kongu Engineering College</p>
        </div>
      </div>
    `;
    
    const plainBody = `
New Contact Form Submission

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

Submission Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
Source: ${formData.source || 'Website Contact Form'}

Action Required: Please respond to this inquiry within 24 hours.

This is an automated notification from the Gender Equality Club website.
    `;
    
    // Send email to all admins
    ADMIN_EMAILS.forEach(adminEmail => {
      GmailApp.sendEmail(
        adminEmail,
        subject,
        plainBody,
        {
          htmlBody: htmlBody,
          name: 'Gender Equality Club Website',
          replyTo: formData.email
        }
      );
    });
    
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Function to test the script (run this manually in Google Apps Script)
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+91 1234567890',
    subject: 'Test Submission',
    message: 'This is a test message to verify the script is working correctly.',
    source: 'Test Script'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

// Function to set up the Google Sheet (run this once to create the sheet)
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }
    
    // Set up headers
    const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Source'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.getRange(1, 1, 1, headers.length).setBackground('#4f46e5');
    sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    // Auto-resize columns
    headers.forEach((_, index) => {
      sheet.autoResizeColumn(index + 1);
    });
    
    // Add some styling
    sheet.getRange(1, 1, sheet.getLastRow(), headers.length).setBorder(true, true, true, true, true, true);
    
    console.log('Sheet setup completed successfully!');
    
  } catch (error) {
    console.error('Error setting up sheet:', error);
  }
}

// Function to get deployment URL (run this to get the web app URL)
function getDeploymentUrl() {
  console.log('To deploy this script:');
  console.log('1. Click "Deploy" > "New deployment"');
  console.log('2. Choose "Web app" as the type');
  console.log('3. Set "Execute as" to "Me"');
  console.log('4. Set "Who has access" to "Anyone"');
  console.log('5. Click "Deploy"');
  console.log('6. Copy the Web app URL and use it in your React app');
}
