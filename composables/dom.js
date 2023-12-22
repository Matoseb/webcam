export function useLoading(button) {

    let textInitial

    return {
        startLoading: (textLoading = 'Loading...') => {
            button.disabled = true;
            textInitial = button.textContent;
            button.textContent = textLoading
            button.classList.add('loading');
        },
        stopLoading: () => {
            button.disabled = false;
            button.textContent = textInitial;
            button.classList.remove('loading');
        }
    };
}