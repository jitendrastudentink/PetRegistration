// src/utils/metronic.ts

// Check if Metronic is loaded
export const isMetronicLoaded = (): boolean => {
  return typeof (window as any).KTApp !== 'undefined' && 
         typeof (window as any).KTMenu !== 'undefined';
};

// Wait for Metronic to load
export const waitForMetronic = (timeout = 5000): Promise<boolean> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const checkInterval = setInterval(() => {
      if (isMetronicLoaded()) {
        clearInterval(checkInterval);
        resolve(true);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(checkInterval);
        console.warn('Metronic not loaded within timeout');
        resolve(false);
      }
    }, 50);
  });
};

// Initialize Metronic components
export const initializeMetronic = async () => {
  if (!isMetronicLoaded()) {
    console.log('Waiting for Metronic to load...');
    const loaded = await waitForMetronic();
    if (!loaded) return;
  }

  const KT = window as any;

  try {
    // Initialize KTApp if it exists
    if (KT.KTApp && typeof KT.KTApp.init === 'function') {
      KT.KTApp.init();
    }

    // Initialize menus
    if (KT.KTMenu && typeof KT.KTMenu.createInstance === 'function') {
      document.querySelectorAll('[data-kt-menu="true"]').forEach(el => {
        try {
          KT.KTMenu.createInstance(el);
        } catch (e) {
          console.error('Menu init error:', e);
        }
      });
    }

    // Initialize drawers
    if (KT.KTDrawer && typeof KT.KTDrawer.createInstance === 'function') {
      document.querySelectorAll('[data-kt-drawer="true"]').forEach(el => {
        try {
          KT.KTDrawer.createInstance(el);
        } catch (e) {
          console.error('Drawer init error:', e);
        }
      });
    }

    console.log('✅ Metronic initialized successfully');
  } catch (error) {
    console.error('❌ Metronic initialization error:', error);
  }
};

// Reinitialize on route change
export const reinitializeOnRouteChange = (router: any) => {
  router.afterEach(() => {
    setTimeout(() => {
      initializeMetronic();
    }, 100);
  });
};