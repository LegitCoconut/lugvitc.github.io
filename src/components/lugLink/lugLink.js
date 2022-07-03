import lugLinkStyles from './lugLink.module.css';

export default function LugLink({ link, children }) {
    return (
        <a
            className={lugLinkStyles._}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
        >
            {children}
        </a>
    );
}

