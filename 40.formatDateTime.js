function formatDateTime(date, locale) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };

    return new Intl.DateTimeFormat(locale, options).format(date);
}