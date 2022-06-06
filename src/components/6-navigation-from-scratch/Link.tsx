import React, {FC, MouseEvent, ReactNode, ReactChildren, ReactChild} from 'react';

type Props = {
  className: string;
  href: string;
  children: JSX.Element | string;
};

const Link: FC<Props> = ({className, href, children}: Props) => {
  const onClick = (event: MouseEvent<HTMLElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
  );
};

export default Link;
