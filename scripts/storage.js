const STORAGE_KEY = 'sft:data';

export const storage = {
    save(data) {
        try {
            const payload = {
                records: data.records || [],
                settings: data.settings || {},
                version: '1.1',
                lastUpdated: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch (e) {
            console.error('Storage Save Failed', e);
        }
    },
    load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return { records: [], settings: null, corrupted: false };
            const parsed = JSON.parse(raw);
            if (!parsed.records || !Array.isArray(parsed.records)) throw new Error();
            return { records: parsed.records, settings: parsed.settings, corrupted: false };
        } catch (e) {
            console.error('Storage Parsing Corrupted');
            return { records: [], settings: null, corrupted: true };
        }
    }
};
