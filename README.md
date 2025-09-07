# Omar Ilpa - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and a contact form that sends emails via Nodemailer.

## Features

- **Modern Design**: Clean, dark theme with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive Animations**: Elements animate when scrolled into view
- **Contact Form**: Functional contact form that sends emails to omarilpa.eg@gmail.com
- **Mobile Navigation**: Smooth slide-in drawer for mobile devices
- **Skills Showcase**: Organized display of technical skills with icons

## Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Express.js, Nodemailer
- **Email Service**: Gmail SMTP

## Setup Instructions

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Install Backend Dependencies
```bash
# Copy the server package.json
cp package-server.json package-server.json.bak
npm install express nodemailer cors
```

### 3. Development Mode
```bash
# Start the frontend dev server
npm run dev

# In another terminal, start the backend server
node server.js
```

### 4. Production Build
```bash
# Build and serve the production version
npm run serve
```

## Contact Form

The contact form includes:
- Name field
- Phone number field
- Email field
- Message textarea
- Form validation
- Loading states with animations
- Success/error feedback

When submitted, the form sends a beautifully formatted HTML email to `omarilpa.eg@gmail.com` with all the form data.

## Email Configuration

The email service is configured with:
- **Service**: Gmail SMTP
- **From**: omarilpa09@gmail.com
- **To**: omarilpa.eg@gmail.com
- **App Password**: fdecormslqjlysws

## Deployment

For production deployment:

1. Build the React app: `npm run build`
2. Deploy the `dist` folder and `server.js` to your hosting platform
3. Make sure to set up environment variables for production email credentials
4. Install production dependencies: `npm install express nodemailer cors`

## Project Structure

```
omar-portfolio/
├── src/
│   ├── App.jsx          # Main React component
│   ├── index.css        # Global styles and animations
│   └── main.jsx         # React entry point
├── server.js            # Express server with email functionality
├── package.json         # Frontend dependencies
├── package-server.json  # Backend dependencies reference
└── README.md           # This file
```

## Customization

- Update personal information in `src/App.jsx`
- Modify email recipient in `server.js`
- Customize colors and styling in Tailwind classes
- Add more projects in the Projects section
- Update skills in the Skills section

## License

MIT License - feel free to use this template for your own portfolio!