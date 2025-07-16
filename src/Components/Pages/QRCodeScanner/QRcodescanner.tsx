import { useState } from 'react';
import { useLocation } from 'wouter';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

export default function Page3() {
    const [codeText, setCodeText] = useState<string | null>(null);
    const [, navigate] = useLocation();

    return (
        <div>
            <h2>Barcode / QR-Code Scanner</h2>

            <BarcodeScannerComponent
                width={400}
                height={300}
                onUpdate={(_, result) => {
                    if (result) {
                        const text = result.getText();
                        setCodeText(text);

                        if (text.startsWith('/page-')) {
                            navigate(text);
                        }
                    }
                }}
            />

            <p>
                <strong>Detected Text:</strong> {codeText ?? 'No code detected yet.'}
            </p>
        </div>
    );
}
