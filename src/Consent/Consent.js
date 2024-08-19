import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { jsPDF } from 'jspdf';
import pdflogo from './pdflogo.png';
import './consent.css';

const Consent = () => {
    const [checked, setChecked] = useState(false);
    const [uploadedSignature, setUploadedSignature] = useState(null);
    const [showTerms, setShowTerms] = useState(false);
    const [patientDetails, setPatientDetails] = useState({
        firstName: '',
        middleName: '',
        surname: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: '',
        maritalStatus: '',
        occupation: '',
        residence: '',
        nationality: '',
        email: '',
        nationalId: '',
        broughtBy: ''
    });

    const [nextOfKinDetails, setNextOfKinDetails] = useState({
        fullName: '',
        relationship: '',
        residence: '',
        phoneNumber: ''
    });

    const sigCanvas = useRef({});

    const handleCheckboxChange = () => {
        setChecked(!checked);
    }

    const handleSignatureUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedSignature(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    // const handleClear = () => {
    //     sigCanvas.current.clear();
    //     setUploadedSignature(null);
    // }

    const handleClear = () => {
        sigCanvas.current.clear();
        setUploadedSignature(null);
        setPatientDetails({
            firstName: '',
            middleName: '',
            surname: '',
            dateOfBirth: '',
            gender: '',
            phoneNumber: '',
            maritalStatus: '',
            occupation: '',
            residence: '',
            nationality: '',
            email: '',
            nationalId: '',
            broughtBy: ''
        });
        setNextOfKinDetails({
            fullName: '',
            relationship: '',
            residence: '',
            phoneNumber: ''
        });
        setChecked(true);
    };



    const addHeaderAndFooter = (doc, pageHeight, pageWidth) => {

        const headerImageHeight = 20;
        const headerImageWidth = 50;
        // doc.addImage(pdflogo, 'PNG', (pageWidth - headerImageWidth) / 2, 10, headerImageWidth, headerImageHeight);
        const xPosition = (pageWidth - headerImageWidth) / 2 + 60;
        doc.addImage(pdflogo, 'PNG', xPosition, 10, headerImageWidth, headerImageHeight);



        const footer = "Page " + doc.internal.getCurrentPageInfo().pageNumber;
        doc.setFontSize(10);
        doc.text(footer, pageWidth / 2, pageHeight - 10, { align: 'center' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;

        doc.text('Consent Form', 20, 30);
        addHeaderAndFooter(doc, pageHeight, pageWidth);

        const terms = `Personal Data Collection and Processing Consent:
I understand that my personal information may be required by those involved in my care, handling my medical tests and reports, or medical bills. This may include insurance companies, payers, guarantors and next of kin. AAR Hospital collects and processes personal data, including; Full Name, Date of Birth, Gender, identification details, Contact Details (e.g., email address, physical address, telephone number), Full Name and contact details for the next of kin, and Medical Records, to provide medical services, communication, and sharing with third parties only as necessary for enabling it to provide care to me or as required by law, medical research or quality assurance activities.
My rights regarding using and disclosing my information will be respected, and appropriate measures will be taken to safeguard my data. I understand that the hospital will disclose my data for mandatory reasons such as: compliance with public health, legislative or regulatory requirements. My personal data will be de-identified in the following situations: medical research purposes, training and teaching purposes, accreditation, quality assurance activities, and relevant healthcare information. In case of personal data transfer to an entity outside Kenya, AAR Hospital shall have in place and shall ensure appropriate technical and other safeguards with respect to security and protection of data.

Treatment Consent:
I request and consent to receive medical treatment and care at AAR Hospital. I understand that this includes all treatment deemed medically necessary or advisable in the professional opinion of AAR Hospital staff. I acknowledge that specialized procedures outside the scope of this general consent including but not limited to, surgical or invasive procedures, use of anesthesia, use of blood and blood products, and other high-risk treatments or procedures will require additional specific consent.
I therefore accept that I may be required to provide personal details and a full medical history, so that I may be properly assessed, diagnosed and treated. I know that the hospital will exercise ethical & competent professional judgment in providing the necessary treatment. I am also aware and accept that no guarantees have been made as to the outcome of the treatment.
As this is a teaching hospital, I understand that my care may be provided with the involvement of authorized trainees/ medical staff, duly supervised by fully qualified medical practitioner(s). This may include healthcare providers within and outside this hospital. Withdrawal of Consent and Data Security:
I retain the right to withdraw consent at any time, by contacting AAR Hospital via dpo@aarhospital.com, which may impact the provision of healthcare services, I therefore shall not hold the hospital liable for any outcome.

Duration of Data Retention and Rights:
My data will be retained as detailed in the Digital Health Act No.15 of 2023 Section 25 and 27 for the necessary purposes and in compliance with legal requirements. I have the right to access, rectify, and request for the deletion of my data held by AAR Hospital. While I understand my rights above, I have also been informed that the Health Act 2017 legally obliges hospitals to maintain my medical records for possible future need. In this instance, I accept not to exercise my right to request erasure or removal of my information.

By signing below, I acknowledge that I have been provided with sufficient information on how my personal information may be used or disclosed. I have read and understood the contents of this consent form for medical treatment and personal data collection/processing`;

        const lines = doc.splitTextToSize(terms, 180);
        let cursorY = 40;

        lines.forEach((line, index) => {
            if (cursorY > pageHeight - 30) {
                doc.addPage();
                addHeaderAndFooter(doc, pageHeight, pageWidth);
                cursorY = 40;
            }
            doc.text(line, 20, cursorY);
            cursorY += 10;
        });

        doc.addPage();
        addHeaderAndFooter(doc, pageHeight, pageWidth);
        doc.text('Patient Details', 20, 40);
        cursorY = 50;
        Object.keys(patientDetails).forEach(key => {
            doc.text(`${key}: ${patientDetails[key]}`, 20, cursorY);
            cursorY += 10;
            if (cursorY > pageHeight - 30) {
                doc.addPage();
                addHeaderAndFooter(doc, pageHeight, pageWidth);
                cursorY = 40;
            }
        });

        doc.addPage();
        addHeaderAndFooter(doc, pageHeight, pageWidth);
        doc.text('Next of Kin Details', 20, 40);
        cursorY = 50;
        Object.keys(nextOfKinDetails).forEach(key => {
            doc.text(`${key}: ${nextOfKinDetails[key]}`, 20, cursorY);
            cursorY += 10;
            if (cursorY > pageHeight - 30) {
                doc.addPage();
                addHeaderAndFooter(doc, pageHeight, pageWidth);
                cursorY = 40;
            }
        });

        if (cursorY + 60 > pageHeight) {
            doc.addPage();
            addHeaderAndFooter(doc, pageHeight, pageWidth);
            cursorY = 40;
        }

        if (uploadedSignature) {
            doc.addImage(uploadedSignature, 'JPEG', 20, cursorY, 150, 50);
        } else if (!sigCanvas.current.isEmpty()) {
            const signatureImage = sigCanvas.current.toDataURL();
            doc.addImage(signatureImage, 'JPEG', 20, cursorY, 150, 50);
        } else {
            alert('Please provide a signature.');
            return;
        }

        doc.save('consent.pdf');
        handleClear();
    }

    const handlePatientDetailsChange = (e) => {
        const { name, value } = e.target;
        setPatientDetails(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    const handleNextOfKinDetailsChange = (e) => {
        const { name, value } = e.target;
        setNextOfKinDetails(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    const toggleTerms = () => {
        setShowTerms(!showTerms);
    }

    const terms = `Personal Data Collection and Processing Consent:
I understand that my personal information may be required by those involved in my care, handling my medical tests and reports, or medical bills. This may include insurance companies, payers, guarantors and next of kin. AAR Hospital collects and processes personal data, including; Full Name, Date of Birth, Gender, identification details, Contact Details (e.g., email address, physical address, telephone number), Full Name and contact details for the next of kin, and Medical Records, to provide medical services, communication, and sharing with third parties only as necessary for enabling it to provide care to me or as required by law, medical research or quality assurance activities.
My rights regarding using and disclosing my information will be respected, and appropriate measures will be taken to safeguard my data. I understand that the hospital will disclose my data for mandatory reasons such as: compliance with public health, legislative or regulatory requirements. My personal data will be de-identified in the following situations: medical research purposes, training and teaching purposes, accreditation, quality assurance activities, and relevant healthcare information. In case of personal data transfer to an entity outside Kenya, AAR Hospital shall have in place and shall ensure appropriate technical and other safeguards with respect to security and protection of data.

Treatment Consent:
I request and consent to receive medical treatment and care at AAR Hospital. I understand that this includes all treatment deemed medically necessary or advisable in the professional opinion of AAR Hospital staff. I acknowledge that specialized procedures outside the scope of this general consent including but not limited to, surgical or invasive procedures, use of anesthesia, use of blood and blood products, and other high-risk treatments or procedures will require additional specific consent.
I therefore accept that I may be required to provide personal details and a full medical history, so that I may be properly assessed, diagnosed and treated. I know that the hospital will exercise ethical & competent professional judgment in providing the necessary treatment. I am also aware and accept that no guarantees have been made as to the outcome of the treatment.
As this is a teaching hospital, I understand that my care may be provided with the involvement of authorized trainees/ medical staff, duly supervised by fully qualified medical practitioner(s). This may include healthcare providers within and outside this hospital. Withdrawal of Consent and Data Security:
I retain the right to withdraw consent at any time, by contacting AAR Hospital via dpo@aarhospital.com, which may impact the provision of healthcare services, I therefore shall not hold the hospital liable for any outcome.

Duration of Data Retention and Rights:
My data will be retained as detailed in the Digital Health Act No.15 of 2023 Section 25 and 27 for the necessary purposes and in compliance with legal requirements. I have the right to access, rectify, and request for the deletion of my data held by AAR Hospital. While I understand my rights above, I have also been informed that the Health Act 2017 legally obliges hospitals to maintain my medical records for possible future need. In this instance, I accept not to exercise my right to request erasure or removal of my information.

By signing below, I acknowledge that I have been provided with sufficient information on how my personal information may be used or disclosed. I have read and understood the contents of this consent form for medical treatment and personal data collection/processing`;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <div className='formHead'>
                    <div className='formLine'></div>
                    <div className='formLogo'></div>
                </div> */}
                <div>
                    <h1 className='formH1'>DATA COLLECTION/PROCESSING AND TREATMENT CONSENT</h1>
                </div>
                <div className='subHeading'>
                    <h2>PATIENT'S DETAILS</h2>
                </div>
                <div className='patintInputs'>
                    <label>First Name</label>
                    <input type="text" name='firstName' value={patientDetails.firstName} onChange={handlePatientDetailsChange} />
                    <label>Middle Name</label>
                    <input type="text" name='middleName' value={patientDetails.middleName} onChange={handlePatientDetailsChange} />
                    <label>Surname</label>
                    <input type="text" name='surname' value={patientDetails.surname} onChange={handlePatientDetailsChange} />
                    <label>Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={patientDetails.dateOfBirth} onChange={handlePatientDetailsChange} />
                    <label>Gender</label>
                    <select name="gender" value={patientDetails.gender} onChange={handlePatientDetailsChange} required>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" value={patientDetails.phoneNumber} onChange={handlePatientDetailsChange} />
                    <label>Marital Status</label>
                    <select name="maritalStatus" value={patientDetails.maritalStatus} onChange={handlePatientDetailsChange} required>
                        <option value="">Select</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                    </select>
                    <label>Occupation</label>
                    <input type="text" name='occupation' value={patientDetails.occupation} onChange={handlePatientDetailsChange} />
                    <label>Residence</label>
                    <input type="text" name='residence' value={patientDetails.residence} onChange={handlePatientDetailsChange} />
                    <label>Nationality</label>
                    <input type="text" name='nationality' value={patientDetails.nationality} onChange={handlePatientDetailsChange} />
                    <label>Email</label>
                    <input type="email" name="email" value={patientDetails.email} onChange={handlePatientDetailsChange} />
                    <label>National ID</label>
                    <input type="number" name="nationalId" value={patientDetails.nationalId} onChange={handlePatientDetailsChange} />
                    <label>Brought By</label>
                    <input type="text" name='broughtBy' value={patientDetails.broughtBy} onChange={handlePatientDetailsChange} />
                </div>

                <div className='subHeading'>
                    <h2>NEXT OF KIN DETAILS</h2>
                </div>
                <div className='patintInputs'>
                    <label>Full Name</label>
                    <input type="text" name='fullName' value={nextOfKinDetails.fullName} onChange={handleNextOfKinDetailsChange} />
                    <label>Relationship</label>
                    <input type="text" name='relationship' value={nextOfKinDetails.relationship} onChange={handleNextOfKinDetailsChange} />
                    <label>Residence</label>
                    <input type="text" name="residence" value={nextOfKinDetails.residence} onChange={handleNextOfKinDetailsChange} />
                    <label>Phone Number</label>
                    <input type="text" name='phoneNumber' value={nextOfKinDetails.phoneNumber} onChange={handleNextOfKinDetailsChange} />
                </div>

                <div className='bottonsignature'>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <label>
                        I agree to the <button type="button" onClick={toggleTerms}>terms and conditions</button>
                    </label>
                </div>

                <div className='bottonsignature'>
                    <h2>Signature</h2>
                    <SignatureCanvas
                        ref={sigCanvas}
                        penColor='black'
                        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                    />
                    <button type="button" onClick={handleClear}>Clear</button>
                    <p>OR</p>
                    <input type="file" accept="image/*" onChange={handleSignatureUpload} />
                    {uploadedSignature && <img src={uploadedSignature} alt="Uploaded Signature" style={{ width: 500, height: 200 }} />}
                </div>
                <button type="submit" className='bottonsignature'>Submit</button>
            </form>

            {showTerms && (
                <div className="termsModal">
                    <div className="termsContent">
                        <div className='popupHeader'>
                            <img src={pdflogo} alt="" />
                            <button className="closeButton" onClick={toggleTerms}>X</button>
                        </div>
                        <h2 className='popupH1'>Terms and Conditions</h2>
                        <p>{terms}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Consent;
