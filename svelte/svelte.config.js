import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		// Ensure adapter-node is being used
		adapter: adapter({
			// default options are shown. You can customize these as needed
			out: 'build', // The directory to build the server to
		})
	}
};