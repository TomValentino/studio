import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const body = await req.json();
  const { componentName, jsxCode, cssCode, cssItem } = body;

  if (!componentName || !jsxCode || !cssCode || !cssItem) {
    return new Response('Missing component name or code', { status: 400 });
  }

  try {
    const componentsDir = path.join(process.cwd(), 'components');
    if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir);

    const jsxPath = path.join(componentsDir, `${componentName}.jsx`);
    const cssPath = path.join(componentsDir, `${componentName}.module.css`);

    fs.writeFileSync(jsxPath, jsxCode);
    fs.writeFileSync(cssPath, cssCode);



      // Define the path for the global CSS file
      const globalCssPath = path.join(process.cwd(), 'components', 'global.css');

      // Check if the global.css exists
      if (fs.existsSync(globalCssPath)) {
        // Read the current content of the global.css
        let globalCssContent = fs.readFileSync(globalCssPath, 'utf8');
  
        // Split the existing global CSS into rules
          const existingCssRules = globalCssContent
          .split(/(?<=})/) // Keep the closing brace
          .map(rule => rule.trim())
          .filter(rule => rule.length > 0);

        // Log each existing CSS rule
        existingCssRules.forEach(rule => {
          console.log('Existing CSS Rule:\n', rule);
          console.log('----------------');
        });

  
        // Append the new media queries at the end
        globalCssContent += `\n/* Added css item */\n${cssItem}`;
  
        // Write the updated content back to global.css
        fs.writeFileSync(globalCssPath, globalCssContent);
      } else {
        // If the global.css doesn't exist, you could handle it here
        console.error('global.css not found!');
      }

      


    return new Response('Component created and media queries added', { status: 200 });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
}
