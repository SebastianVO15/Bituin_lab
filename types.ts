import React from 'react';

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  reviews?: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  tags: string[];
}

export interface Client {
  id: number;
  name: string;
  logoData: string; // Just text for this demo as we don't have real SVG paths for all
}