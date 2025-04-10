export const Tabs = ({ tab, onTabSelected, activeTabId }) => {
  return (
    <li className={activeTabId === tab.title ? 'is-active' : ''} data-cy="Tab">
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={e => onTabSelected(e.target.innerText)}
      >
        {tab.title}
      </a>
    </li>
  );
};
