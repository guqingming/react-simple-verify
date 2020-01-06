# react-mati
React component to display the Mati button. Mati allows you to verify users identity online. https://getmati.com


## Installation

```
    yarn add react-mati
```

## Configuration

Go to your Mati dashboard and find your client ID: https://dashboard.getmati.com/

```
    import ReactMati from 'components/react-mati';

    ...

    <ReactMati clientId="<Your Mati client ID>" metadata={{ userId: userId }} />}

```

