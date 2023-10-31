const SubscribeForm = () => {
  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Start HealN
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Start in the Waiting Area for free, subscribe to start your quest.
            </p>
          </div>
          <div className="m-7">
            <button
              onClick={() => window.location.href = 'https://discord.gg/EMrwEPwcQU'}
              className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
            >
              HealXYZ Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
