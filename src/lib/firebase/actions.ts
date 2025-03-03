"use server";

import { db, storage } from "./config";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  // getDoc,
  orderBy,
  // limit,
  increment
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import type {
  BaseQRCode,
  WebsiteQR,
  WifiQR,
  VideoQR,
  ApplicationQR
} from "../types/firebase";

// Helper function to generate QR code as data URL
async function generateQRCodeDataURL(value: string): Promise<string> {
  try {
    const dataUrl = await QRCode.toDataURL(value, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 400
    });
    return dataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

// Helper function to save QR code image
async function saveQRCodeImage(qrCodeDataUrl: string, id: string): Promise<string> {
  try {
    const storageRef = ref(storage, `qr-codes/${id}.png`);
    await uploadString(storageRef, qrCodeDataUrl, 'data_url');
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error saving QR code image:', error);
    throw new Error('Failed to save QR code image');
  }
}

// Create new QR code
export async function createQRCode<T extends BaseQRCode>(
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'scans' | 'qrImageUrl' | 'qrCodeUrl'>
): Promise<{ id: string; qrImageUrl: string; qrCodeUrl: string }> {
  try {
    // 1. Generate a new ID
    const id = uuidv4();

    // 2. Generate the QR code URL for redirection
    const qrCodeUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/qrcode/${id}`;

    // 3. Generate QR code image with the URL
    const qrCodeDataUrl = await generateQRCodeDataURL(qrCodeUrl);

    // 4. Save QR code image to storage
    const qrImageUrl = await saveQRCodeImage(qrCodeDataUrl, id);

    // 5. Prepare the document data
    const qrData = {
      ...data,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      scans: 0,
      qrImageUrl,
      qrCodeUrl
    };

    // 6. Save to Firestore
    await addDoc(collection(db, 'qrcodes'), qrData);

    return { id, qrImageUrl, qrCodeUrl };
  } catch (error) {
    console.error('Error creating QR code:', error);
    throw new Error('Failed to create QR code');
  }
}

// Get QR code by ID with type discrimination
export async function getQRCodeById(id: string): Promise<{
  type: string;
  data: WebsiteQR | WifiQR | VideoQR | ApplicationQR | null;
}> {
  try {
    const q = query(collection(db, 'qrcodes'), where('id', '==', id));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { type: '', data: null };
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();

    return {
      type: data.type,
      data: {
        ...data,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      } as WebsiteQR | WifiQR | VideoQR | ApplicationQR
    };
  } catch (error) {
    console.error('Error getting QR code:', error);
    throw new Error('Failed to get QR code');
  }
}

// Get QR codes by type
export async function getQRCodesByType<T extends BaseQRCode>(
  type: string,
  // limit?: number
): Promise<T[]> {
  try {
    const q = query(
      collection(db, 'qrcodes'),
      where('type', '==', type),
      orderBy('createdAt', 'desc'),
      // limit ? limit(limit) : undefined
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
      updatedAt: doc.data().updatedAt.toDate(),
    })) as T[];
  } catch (error) {
    console.error('Error getting QR codes:', error);
    throw new Error('Failed to get QR codes');
  }
}

// Update QR code scans
export async function incrementQRCodeScans(id: string): Promise<void> {
  try {
    const docRef = doc(db, 'qrcodes', id);
    await updateDoc(docRef, {
      scans: increment(1),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating QR code scans:', error);
    throw new Error('Failed to update QR code scans');
  }
}

// Update QR code data
export async function updateQRCode<T extends BaseQRCode>(
  id: string,
  data: Partial<T>
): Promise<void> {
  try {
    const docRef = doc(db, 'qrcodes', id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating QR code:', error);
    throw new Error('Failed to update QR code');
  }
} 