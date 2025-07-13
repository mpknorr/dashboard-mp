export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      german_cities: {
        Row: {
          city: string | null
          created_at: string
          id: number
          state: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: number
          state?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: number
          state?: string | null
        }
        Relationships: []
      }
      german_companies: {
        Row: {
          address: string | null
          analysis: string | null
          ceo_name: string | null
          city: string | null
          company: string | null
          company_mission: string | null
          created_at: string
          district: string | null
          email: string | null
          has_commercial_storage: boolean | null
          id: number
          industry: string | null
          phone: string | null
          state: string | null
          storage_manufacturers: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          analysis?: string | null
          ceo_name?: string | null
          city?: string | null
          company?: string | null
          company_mission?: string | null
          created_at?: string
          district?: string | null
          email?: string | null
          has_commercial_storage?: boolean | null
          id?: number
          industry?: string | null
          phone?: string | null
          state?: string | null
          storage_manufacturers?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          analysis?: string | null
          ceo_name?: string | null
          city?: string | null
          company?: string | null
          company_mission?: string | null
          created_at?: string
          district?: string | null
          email?: string | null
          has_commercial_storage?: boolean | null
          id?: number
          industry?: string | null
          phone?: string | null
          state?: string | null
          storage_manufacturers?: string | null
          website?: string | null
        }
        Relationships: []
      }
      german_districts: {
        Row: {
          city: string | null
          created_at: string
          district: string | null
          id: number
          state: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          district?: string | null
          id?: number
          state?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          district?: string | null
          id?: number
          state?: string | null
        }
        Relationships: []
      }
      sales_companies: {
        Row: {
          city: string | null
          country: string | null
          created_at: string | null
          external_id: string | null
          Firmenname: string | null
          id: string
          industry: string | null
          phone: string | null
          source: string | null
          state: string | null
          street: string | null
          website: string | null
          zip: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          external_id?: string | null
          Firmenname?: string | null
          id?: string
          industry?: string | null
          phone?: string | null
          source?: string | null
          state?: string | null
          street?: string | null
          website?: string | null
          zip?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          external_id?: string | null
          Firmenname?: string | null
          id?: string
          industry?: string | null
          phone?: string | null
          source?: string | null
          state?: string | null
          street?: string | null
          website?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      sales_company_contacts: {
        Row: {
          company_id: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          note: string | null
          phone: string | null
          whatsapp: boolean | null
        }
        Insert: {
          company_id?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          note?: string | null
          phone?: string | null
          whatsapp?: boolean | null
        }
        Update: {
          company_id?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          note?: string | null
          phone?: string | null
          whatsapp?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_company_contacts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "sales_companies"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_company_details: {
        Row: {
          battery_available: string | null
          company_id: string | null
          description: string | null
          detail_url: string | null
          id: string
          install_areas: string | null
          installed_since: string | null
          inverter_suppliers: string | null
          last_updated: string | null
          module_suppliers: string | null
          parent_company: string | null
          rating: number | null
          reviews: number | null
          source_url: string | null
          system_size: string | null
        }
        Insert: {
          battery_available?: string | null
          company_id?: string | null
          description?: string | null
          detail_url?: string | null
          id?: string
          install_areas?: string | null
          installed_since?: string | null
          inverter_suppliers?: string | null
          last_updated?: string | null
          module_suppliers?: string | null
          parent_company?: string | null
          rating?: number | null
          reviews?: number | null
          source_url?: string | null
          system_size?: string | null
        }
        Update: {
          battery_available?: string | null
          company_id?: string | null
          description?: string | null
          detail_url?: string | null
          id?: string
          install_areas?: string | null
          installed_since?: string | null
          inverter_suppliers?: string | null
          last_updated?: string | null
          module_suppliers?: string | null
          parent_company?: string | null
          rating?: number | null
          reviews?: number | null
          source_url?: string | null
          system_size?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_company_details_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "sales_companies"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_company_socials: {
        Row: {
          company_id: string
          facebook: string | null
          instagram: string | null
          linkedin: string | null
          tiktok: string | null
          twitter: string | null
          youtube: string | null
        }
        Insert: {
          company_id: string
          facebook?: string | null
          instagram?: string | null
          linkedin?: string | null
          tiktok?: string | null
          twitter?: string | null
          youtube?: string | null
        }
        Update: {
          company_id?: string
          facebook?: string | null
          instagram?: string | null
          linkedin?: string | null
          tiktok?: string | null
          twitter?: string | null
          youtube?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_company_socials_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "sales_companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
