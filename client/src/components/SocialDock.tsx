import { Headphones, Mail } from "lucide-react";

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.13 1.6 5.92L.1 24l6.37-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.41ZM12.07 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.83 9.83 0 0 1-1.51-5.18C2.17 6.43 6.6 2 12.06 2a9.8 9.8 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.43 9.89-9.86 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.03c-3.22.7-3.9-1.38-3.9-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19A11.1 11.1 0 0 1 12 5.99c.99 0 1.98.13 2.91.38 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.11 0 4.44-2.71 5.42-5.29 5.71.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>;
}

export function SocialDock() {
  return (
    <nav className="social-dock" aria-label="Canais rápidos">
      <a className="social-dock-link is-whatsapp" href="#contato" aria-label="WhatsApp — confirmar canal real"><WhatsAppIcon /></a>
      <a className="social-dock-link is-instagram" href="#contato" aria-label="Instagram — confirmar canal real"><InstagramIcon /></a>
      <a className="social-dock-link is-github" href="#contato" aria-label="GitHub — confirmar canal real"><GitHubIcon /></a>
      <a className="social-dock-link is-email" href="#contato" aria-label="E-mail"><Mail size={17} /></a>
      <a className="social-dock-link is-support" href="#contato" aria-label="Atendimento"><Headphones size={17} /></a>
    </nav>
  );
}
